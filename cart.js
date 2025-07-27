// Cart functionality
class CartSystem {
    constructor() {
        this.userId = this.getUserId();
        this.initCart();
    }

    getUserId() {
        // Generate or retrieve a user ID (in a real app, this would be from authentication)
        let userId = localStorage.getItem('khalil_user_id');
        if (!userId) {
            userId = 'user_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('khalil_user_id', userId);
        }
        return userId;
    }

    initCart() {
        // Initialize cart elements if they exist
        this.cartIcon = document.querySelector('.cart-icon');
        this.cartCount = document.querySelector('.cart-count');
        this.cartDropdown = document.querySelector('.cart-dropdown');
        this.cartItemsContainer = document.querySelector('.cart-items');
        this.totalPriceElement = document.querySelector('.total-price');
        this.cartNotification = document.querySelector('.cart-notification');
        
        if (this.cartIcon) {
            this.cartIcon.addEventListener('click', () => this.toggleCart());
        }
        
        if (this.cartCount) {
            this.updateCartCount();
        }
    }

    async addToCart(productId, productName, productPrice, productImage, quantity = 1) {
        try {
            const response = await fetch('/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: this.userId,
                    product_id: productId,
                    product_name: productName,
                    product_price: productPrice,
                    product_image: productImage,
                    quantity: quantity
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.updateCartCount(data.cart_count);
                this.showNotification(`${productName} added to cart`);
                
                // If cart is open, refresh the items
                if (this.cartDropdown && this.cartDropdown.classList.contains('active')) {
                    this.renderCartItems();
                }
                
                return true;
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
        return false;
    }

    async updateCartCount() {
        try {
            const response = await fetch(`/get-cart?user_id=${this.userId}`);
            const data = await response.json();
            
            if (this.cartCount) {
                this.cartCount.textContent = data.cart_count || 0;
                this.cartCount.style.display = data.cart_count > 0 ? 'flex' : 'none';
            }
            
            return data.cart_count || 0;
        } catch (error) {
            console.error('Error updating cart count:', error);
            return 0;
        }
    }

    async renderCartItems() {
        try {
            const response = await fetch(`/get-cart?user_id=${this.userId}`);
            const data = await response.json();
            
            if (!this.cartItemsContainer) return;
            
            if (data.cart_items.length === 0) {
                this.cartItemsContainer.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
                if (this.totalPriceElement) {
                    this.totalPriceElement.textContent = 'Rs 0';
                }
                return;
            }
            
            this.cartItemsContainer.innerHTML = '';
            let total = 0;
            
            data.cart_items.forEach(item => {
                const itemTotal = item.product_price * item.quantity;
                total += itemTotal;
                
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.product_image}" alt="${item.product_name}">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.product_name}</h4>
                        <div class="cart-item-price">Rs ${item.product_price.toLocaleString()}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.product_id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.product_id}">+</button>
                        </div>
                        <div class="remove-item" data-id="${item.product_id}">Remove</div>
                    </div>
                `;
                this.cartItemsContainer.appendChild(cartItemElement);
            });
            
            if (this.totalPriceElement) {
                this.totalPriceElement.textContent = `Rs ${total.toLocaleString()}`;
            }
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
                btn.addEventListener('click', (e) => this.updateQuantity(e.target.dataset.id, -1));
            });
            
            document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
                btn.addEventListener('click', (e) => this.updateQuantity(e.target.dataset.id, 1));
            });
            
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => this.removeItem(e.target.dataset.id));
            });
            
        } catch (error) {
            console.error('Error rendering cart items:', error);
        }
    }

    async updateQuantity(productId, change) {
        try {
            // First get current quantity
            const response = await fetch(`/get-cart?user_id=${this.userId}`);
            const data = await response.json();
            
            const item = data.cart_items.find(item => item.product_id === productId);
            if (!item) return;
            
            const newQuantity = item.quantity + change;
            
            if (newQuantity < 1) {
                await this.removeItem(productId);
                return;
            }
            
            const updateResponse = await fetch('/update-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: this.userId,
                    product_id: productId,
                    quantity: newQuantity
                })
            });
            
            const updateData = await updateResponse.json();
            
            if (updateData.success) {
                this.updateCartCount();
                this.renderCartItems();
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    }

    async removeItem(productId) {
        try {
            const response = await fetch('/update-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: this.userId,
                    product_id: productId,
                    quantity: 0
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.updateCartCount();
                this.renderCartItems();
                this.showNotification('Item removed from cart');
            }
        } catch (error) {
            console.error('Error removing item:', error);
        }
    }

    toggleCart() {
        if (!this.cartDropdown) return;
        
        this.cartDropdown.classList.toggle('active');
        
        if (this.cartDropdown.classList.contains('active')) {
            this.renderCartItems();
        }
    }

    showNotification(message) {
        if (!this.cartNotification) return;
        
        const notification = this.cartNotification.querySelector('span');
        notification.textContent = message;
        
        this.cartNotification.classList.add('active');
        
        setTimeout(() => {
            this.cartNotification.classList.remove('active');
        }, 3000);
    }
}

// Initialize cart system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.cartSystem = new CartSystem();
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        const cartDropdown = document.querySelector('.cart-dropdown');
        const cartIcon = document.querySelector('.cart-icon');
        
        if (cartDropdown && cartIcon && !cartDropdown.contains(e.target) && !cartIcon.contains(e.target)) {
            cartDropdown.classList.remove('active');
        }
    });
});