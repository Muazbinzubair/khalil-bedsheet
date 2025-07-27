// products.js - Contains all product data
const beddingProducts = [
    {
        id: '1',
        title: 'Premium Cotton Bedsheet Set',
        price: 2999,
        description: 'Soft and breathable 100% cotton bedsheet set with pillow covers. Available in multiple colors.',
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        stock: 15,
        badge: 'Bestseller',
        category: 'bedding',
        features: [
            '100% premium cotton',
            'Breathable and soft',
            'Includes 1 bedsheet and 2 pillow covers',
            'Machine washable',
            'Available in multiple colors'
        ],
        thumbnails: [
            'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            'https://images.unsplash.com/photo-1556228578-3a5c257abab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        ]
    },
    {
        id: '2',
        title: 'Luxury Silk Bedsheet',
        price: 4999,
        description: 'Ultra-smooth silk bedsheet for a luxurious sleeping experience. Hypoallergenic and temperature regulating.',
        image: 'https://images.unsplash.com/photo-1551806229-5b1e0a0b9a4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        stock: 8,
        badge: 'New',
        category: 'bedding',
        features: [
            '100% pure silk',
            'Hypoallergenic',
            'Temperature regulating',
            'Includes 1 bedsheet',
            'Dry clean only'
        ],
        thumbnails: [
            'https://images.unsplash.com/photo-1551806229-5b1e0a0b9a4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            'https://images.unsplash.com/photo-1556228578-3a5c257abab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        ]
    },
    {
    id: 'bs007',  // Unique ID (bs = bedsheet, 007 = product number)
    title: 'Royal Jacquard Luxury Bedsheet Set',
    price: 5499,
    description: 'Exquisite jacquard-woven bedsheet set with intricate Persian-inspired designs. Made from premium 100% Egyptian cotton for unmatched softness and durability. Perfect for adding regal elegance to your bedroom.',
    image: 'https://images.unsplash.com/photo-1616628188841-3a8c0b61f4e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 9,
    badge: 'Premium',
    category: 'bedding',
    features: [
        '100% Egyptian long-staple cotton',
        '300 thread count for supreme softness',
        'Jacquard woven intricate patterns',
        'Includes: 1 bedsheet + 2 pillow covers + 1 bolster cover',
        'Machine washable (cold water)',
        'Color: Royal Blue & Gold',
        'Size: King (78x80 inches)'
    ],
    thumbnails: [
        'https://images.unsplash.com/photo-1616628188841-3a8c0b61f4e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583845112203-454c5d2c5d37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556228578-3a5c257abab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
},
    {
        id: '3',
        title: 'Microfiber Comforter Set',
        price: 3999,
        description: 'Soft microfiber comforter set that keeps you warm in winter and cool in summer. Includes duvet cover.',
        image: 'https://images.unsplash.com/photo-1616628188841-3a8c0b61f4e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        stock: 12,
        badge: 'Sale',
        category: 'bedding',
        features: [
            'Premium microfiber',
            'All-season comfort',
            'Includes duvet cover',
            'Machine washable',
            'Available in multiple colors'
        ],
        thumbnails: [
            'https://images.unsplash.com/photo-1616628188841-3a8c0b61f4e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            'https://images.unsplash.com/photo-1556228578-3a5c257abab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        ]
    },
    {
        id: '4',
        title: 'Organic Bamboo Bedsheet',
        price: 3599,
        description: 'Eco-friendly bamboo fiber bedsheet that is naturally antibacterial and moisture-wicking.',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        stock: 5,
        badge: 'Limited',
        category: 'bedding',
        features: [
            '100% organic bamboo',
            'Naturally antibacterial',
            'Moisture-wicking',
            'Includes 1 bedsheet',
            'Machine washable'
        ],
        thumbnails: [
            'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            'https://images.unsplash.com/photo-1556228578-3a5c257abab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        ]
    },
    {
        id: '5',
        title: 'Jacquard Weave Bedsheet Set',
        price: 4299,
        description: 'Elegant jacquard weave bedsheet set with intricate patterns. Adds luxury to any bedroom.',
        image: 'https://images.unsplash.com/photo-1616628188841-3a8c0b61f4e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        stock: 7,
        badge: '',
        category: 'bedding',
        features: [
            'Premium cotton blend',
            'Jacquard weave pattern',
            'Includes 1 bedsheet and 2 pillow covers',
            'Machine washable',
            'Elegant design'
        ],
        thumbnails: [
            'https://images.unsplash.com/photo-1616628188841-3a8c0b61f4e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            'https://images.unsplash.com/photo-1556228578-3a5c257abab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        ]
    },
];

// Save to localStorage for access across pages
localStorage.setItem('bedding_products', JSON.stringify(beddingProducts));