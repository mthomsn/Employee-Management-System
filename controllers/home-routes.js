const router = require('express').Router();
// IMPORT MODELS

// GET login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});
// GET all for homepage
router.get('/', async (req, res) => {
  // What data do we need to send to the homepage?
});
