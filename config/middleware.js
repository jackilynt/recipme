// authMiddleware.js

const withAuth = (req, res, next) => {
    // Check if the user is logged in
    if (req.session.logged_in) {
      // User is logged in, allow access to the API routes
      next();
    } else {
      // User is not logged in, redirect or send an error response
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = withAuth;
  