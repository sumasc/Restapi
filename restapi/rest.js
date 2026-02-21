 const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data in request bodies
app.use(express.json());

// Mock Database
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' }
];

// 1. GET Endpoint: Retrieve all books
app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});
// 2. POST Endpoint: Add a new book
app.post('/api/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});