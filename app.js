const express = require('express');
const app = express();

const todoRoutes = require('./routes/todo.routes');
const { connect } = require('./mongodb/mongodb.connection');

connect().catch(e => console.error(e));

app.use(express.json());

app.use('/todos', todoRoutes);

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});

app.get('/', (req, res) => {
    res.json('Hello World');
});

module.exports = app;
