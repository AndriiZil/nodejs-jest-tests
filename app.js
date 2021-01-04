const express = require('express');
const app = express();

const todoRoutes = require('./routes/todo.routes');
const { connect } = require('./mongodb/mongodb.connection');

connect().catch(e => console.error(e));

app.use(express.json());

app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
    res.json('Hello World');
});

// app.listen(3000, () => {
//     console.log('Serve is now running');
// });

module.exports = app;
