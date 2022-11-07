const router = require('express').Router();
// IMPORT MODELS

// GET all employees
router.get('/', async (req, res) => {
  try {
    // Get all employees and JOIN with their role and pto balance
    const employeeData = await Employee.findAll({
      include: [
        {
          model: Role, // Get with Sarah to confirm model info
          attributes: ['role_name'],
        },
        {
          model: Pto, // Get with Sarah to confirm model info
          attributes: ['pto_balance'],
        },
      ],
    });
    // Serialize data so the template can read it
    const employees = employeeData.map((employee) => employee.get({ plain: true }));

    // Send employee info to homepage template
    res.render('homepage', { // Get with Mark/Sarah to confirm template info
      employees,
      loggedIn: req.session.loggedIn,
    });
  } 
  catch(err) {
    res.status(500).json(err);
  }
});

// GET employee by id
router.get('/:id', async (req, res) => {
  try {
    const employeeData = await Employee.findByPk(req.params.id, {
      include: [
        {
          model: Role, // Get with Sarah to confirm model info
          attributes: ['role_name'],
        },
        {
          model: Pto, // Get with Sarah to confirm model info
          attributes: ['pto_balance'],
        },
      ],
    });

    const employee = employeeData.get({ plain: true });

    res.render('employee', { // Get with Mark/Sarah to confirm template info
      ...employee,
      loggedIn: req.session.loggedIn,
    });
  } 
  catch(err) {
    res.status(500).json(err);
  }
});

// PUT update employee
router.put('/:id', async (req, res) => {
  try {
    const employeeData = await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!employeeData[0]) {
      res.status(404).json({ message: 'No employee found with this id!' });
      return;
    }

    res.status(200).json(employeeData);
  } 
  catch(err) {
    res.status(500).json(err);
  }
});

// DELETE employee