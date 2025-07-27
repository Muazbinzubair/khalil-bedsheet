// Sample electronics products data
const electronicsProducts = [
    {
        id: "elec1",
        title: "Smart LED TV 43 Inch",
        price: 59999,
        description: "Ultra HD 4K Smart LED TV with HDR and built-in WiFi",
        image: "https://example.com/tv.jpg",
        stock: 5,
        brand: "Samsung",
        model: "UA43AU7000",
        warranty: "1 Year",
        badge: "New",
        category: "electronics"
    },
    {
        id: "elec2",
        title: "Wireless Bluetooth Headphones",
        price: 4999,
        description: "Premium noise cancelling wireless headphones with 30hr battery life",
        image: "https://example.com/headphones.jpg",
        stock: 12,
        brand: "Sony",
        model: "WH-CH710N",
        warranty: "6 Months",
        badge: "Bestseller",
        category: "electronics"
    },
    {
        id: "elec3",
        title: "Portable Bluetooth Speaker",
        price: 3499,
        description: "Waterproof portable speaker with 20W output and 15hr playtime",
        image: "https://example.com/speaker.jpg",
        stock: 8,
        brand: "JBL",
        model: "Flip 5",
        warranty: "6 Months",
        category: "electronics"
    },
    {
        id: "elec4",
        title: "Smartphone 128GB",
        price: 34999,
        description: "6.5\" HD+ display, 48MP triple camera, 5000mAh battery",
        image: "https://example.com/phone.jpg",
        stock: 0,
        brand: "Infinix",
        model: "Note 10 Pro",
        warranty: "1 Year",
        category: "electronics"
    }
];

// Save to localStorage if not already present
if (!localStorage.getItem('electronics_products')) {
    localStorage.setItem('electronics_products', JSON.stringify(electronicsProducts));
}