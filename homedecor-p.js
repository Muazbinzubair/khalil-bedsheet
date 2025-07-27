// Sample home decor products data
const homedecorProducts = [
    {
        id: "hd1",
        title: "Modern Wall Art Painting",
        price: 4500,
        description: "Beautiful contemporary wall art painting that adds elegance to any room.",
        image: "https://i.postimg.cc/8z0JQy7y/premium-bedsheet.jpg",
        stock: 10,
        badge: "Bestseller",
        type: "Wall Art",
        material: "Canvas, Acrylic",
        dimensions: "24x36 inches"
    },
    {
        id: "hd2",
        title: "Decorative Ceramic Vase",
        price: 3200,
        description: "Handcrafted ceramic vase perfect for displaying flowers or as a standalone decor piece.",
        image: "https://i.postimg.cc/8z0JQy7y/premium-bedsheet.jpg",
        stock: 15,
        badge: "New",
        type: "Vase",
        material: "Ceramic",
        dimensions: "12x8 inches"
    },
    {
        id: "hd3",
        title: "Wooden Photo Frame Set",
        price: 2500,
        description: "Set of 3 high-quality wooden photo frames in different sizes.",
        image: "https://i.postimg.cc/8z0JQy7y/premium-bedsheet.jpg",
        stock: 8,
        type: "Photo Frame",
        material: "Wood",
        dimensions: "8x10, 5x7, 4x6 inches"
    },
    {
        id: "hd4",
        title: "Decorative Throw Pillow",
        price: 1800,
        description: "Soft and stylish throw pillow with elegant embroidery.",
        image: "https://i.postimg.cc/8z0JQy7y/premium-bedsheet.jpg",
        stock: 20,
        type: "Pillow",
        material: "Cotton, Polyester"
    },
    {
        id: "hd5",
        title: "Metal Wall Clock",
        price: 3800,
        description: "Sleek metal wall clock with silent movement and modern design.",
        image: "https://i.postimg.cc/8z0JQy7y/premium-bedsheet.jpg",
        stock: 5,
        badge: "Limited",
        type: "Clock",
        material: "Metal",
        dimensions: "14 inches diameter"
    }
];

// Save to localStorage if not already present
if (!localStorage.getItem('homedecor_products')) {
    localStorage.setItem('homedecor_products', JSON.stringify(homedecorProducts));
}