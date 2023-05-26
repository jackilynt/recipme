// about.js

const router = require('express').Router();

// GET route for the About page
router.get('/', (req, res) => {
  res.render('about'); // Assuming you have an "about" handlebars template file
});

module.exports = router;
