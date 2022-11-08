const router = require('express').Router();
// IMPORT MODELS
const { Employee, Role, Leave } = require('../models');

// GET login page
router.get('/login', (req, res) => { // URL is /login
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// GET all for homepage
router.get('/', async (req, res) => { // URL is /
  // What data do we need to send to the homepage?
  // 1. All employees
  // 2. All roles
  // 3. All leave balances

  try {
    const employeeData = await Employee.findAll({
      include: [
        {
          model: Roles,
          attributes: ['role_name'],
        },
        {
          model: Leave,
          attributes: ['leave_balance'],
        },
      ],
    });
    const employees = employeeData.map((employee) => employee.get({ plain: true }));

    const roleData = await Role.findAll(); // Do we need to pull in the role data?
    const roles = roleData.map((role) => role.get({ plain: true }));

    const leaveData = await Leave.findAll(); // Do we need to pull in the leave data?
    const leaves = leaveData.map((leave) => leave.get({ plain: true }));

    res.render('homepage', { // Get with Mark/Sarah to confirm template info
      employees,
      roles,
      leaves,
      loggedIn: req.session.loggedIn,
    });
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;