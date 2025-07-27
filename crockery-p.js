// crockery-p.js - Product data for crockery items
const crockeryProducts = [
    {
        id: "1",
        title: "Premium Porcelain Dinner Set",
        price: 7499,
        description: "Elevate your dining experience with our premium porcelain dinner set. Crafted from high-quality porcelain, this elegant set is both durable and beautiful, perfect for everyday use and special occasions.",
        image: "https://i.postimg.cc/8z0JQy7y/premium-bedsheet.jpg",
        stock: 15,
        badge: "Bestseller",
        material: "Premium Porcelain",
        setType: "Complete Dinner Set",
        category: "crockery",
        thumbnails: [
            "https://i.postimg.cc/8z0JQy7y/premium-bedsheet.jpg",
            "https://example.com/thumbnail2.jpg",
            "https://example.com/thumbnail3.jpg"
        ],
        features: [
            "Includes 6 dinner plates, 6 salad plates, 6 bowls, and 6 cups",
            "Microwave and dishwasher safe",
            "Lead-free and food-safe materials",
            "Elegant modern design"
        ]
    },
    // Add more products as needed
];

// Initialize products in localStorage if not already present
if (!localStorage.getItem('crockery_products')) {
    localStorage.setItem('crockery_products', JSON.stringify(crockeryProducts));
}