const router = require('express').Router();
const { Employee, Roles, Leave } = require('../../models');

// current URL is /api/login

// POST user login
router.post('/', async (req, res) => { // URL is /api/login
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username, // Confirm login info
      },
    });

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    req.session.save(() => { // Confirm login info
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
});

// POST user logout
router.post('/exit', (req, res) => { // URL is /api/login/exit
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;