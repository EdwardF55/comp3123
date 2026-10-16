const express = require('express');
const booksRoute = require('./routes/books')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose');

const dotenv = require("dotenv");
dotenv.config();

// TODO - Update your mongoDB Atals Url here to Connect to the database
// Get the MongoDB connection string from environment variables or use a default value
const CONNECTION_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase"

app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(CONNECTION_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))


app.use("/api/v1", booksRoutes)
app.use("/api/v1", userRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}/`)
})