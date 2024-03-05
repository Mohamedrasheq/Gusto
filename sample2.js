const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Sample product data (in a real application, you would use a database)
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more products as needed
];

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/purchase', (req, res) => {
    // Handle purchase logic here
    const productId = req.body.productId;
    // Additional logic for processing the purchase
    res.send("Product with ID ${productId} purchased successfully!");
});

app.listen(port, () => {
    console.log("Server is running at http://localhost:${port}");
});

