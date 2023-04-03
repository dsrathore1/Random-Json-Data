const productsData = () => {
    const data = { products: [] };
    const companies = ["apple", "samsung", "lenovo", "hp", "dell", "mi", "asus"];
    const randomCompany = Math.floor(Math.random() * companies.length);

    for (let i = 0; i < 10; i++) {
        data.products.push({
            id: i,
            name: `user${i}`,
            price: Math.floor(Math.random() * (500 - 100 + 1) + 20),
            feature: Boolean(Math.random() * (1 - 0 + 1) + 1),
            rating: (Math.random() * (4.9 - 1.1 + 1) + 1.1).toFixed(1),
            createdAt: Date(1e+12),
            company: companies[randomCompany]
        });
    }
    return data;
}

module.exports = productsData;
