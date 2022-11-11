const router = require('express').Router();
const { Employee, User, Roles, Leave } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const employeeData = await Employee.findAll({
      include: [
        {
          model: Leave,
          attributes: ['leave_balance'],
        },
        {model: Roles,
          attributes: ['title']
        }
      ],
    });

    // Serialize data so the template can read it
    const employees = employeeData.map((employee) => employee.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      employees, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get(`/employee/:id`, async (req, res) => {
  try {
    const employeeData = await Employee.findByPk(req.params.id, {
      include: [
        {
          model: Roles,
          attributes: ['title', 'salary'],
        },
        {
          model: Leave,
          attributes: ['leave_balance'],
        }
      ],
    });

    const employee = employeeData.get({ plain: true });

    res.render('employee', {
      ...employee,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Employee }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', (req, res) => { // URL is /
  if (req.session.loggedIn) {
    res.render('/dashboard');
    return;
  };
  res.render('login');
});

router.get('/login', (req, res) => { // URL is /
  if (req.session.loggedIn) {
    res.render('/');
    return;
  };
  res.render('login');
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.render('login');
    });
  } else {
    res.render('login');
    res.status(404).end();
  }
});

module.exports = router;
