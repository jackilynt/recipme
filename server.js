/**
 * Initial Server - By Brendan
 */

// Require our Express Server, and CORS for an extra pkg
const express = require("express");
const cors = require("cors");
const { engine } = require('express-handlebars');
const path = require('path');
require('dotenv').config();

// Initialize our Server as our App Object
const app = express();

// Setup our CORS variables/options for local host (until heroku)
var corsOptions = {
    origin: "http://localhost:3001"
};

// Initial setup of Express App
app.use(cors(corsOptions));                             // Uses CORS settings we declared above
app.use(express.json());                                // Sets content-type to "application/json"
app.use(express.urlencoded({ extended: true }));        // Parses content-type as application/x-www-form-urlencoded

// Add Sync() method for db
const db = require("./models");
db.sequelize.sync()
    .then(() => {
        console.log(`- Synced db.`);
    })
    .catch((err) => {
        console.log(`- Failed to sync db: ${err.message}`);
    })

// Setup Handlebars here
app.use(express.static(path.join(__dirname, '/public')));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// Import Routes from /routes/
require("./routes/recipe.route")(app);
require("./routes/user.route")(app);


// Setup our Port and listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`:: Server is running on port: ${PORT}! ::`);
});
