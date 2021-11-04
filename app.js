const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
    } catch (error) {
        console.log(error);
    }
};

start();