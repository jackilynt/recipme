// module.exports = router;
  const router = require('express').Router();
  const { User } = require('../../models');
  const withAuth = require('../../controllers');
  
// Render the login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/profile');
  } else {
    res.render('login');
  }
});

  // Create a new user
  router.post('/signup', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.loggedIn = true;
        res.redirect('/profile');
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Login user
  router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        res.status(400).json({ message: 'Incorrect email or password. Please try again.' });
        return;
      }
      const validPassword = await user.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password. Please try again.' });
        return;
      }
      req.session.save(() => {
        req.session.userId = user.id;
        req.session.loggedIn = true;
        res.redirect('/profile');
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
//   Logout user
  router.post('/logout', withAuth, async (req, res) => {
    try {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  