const router = require('express').Router();
const { Employee, Roles, Leave } = require('../../models');

// current URL is /api/employee
// GET all employees
router.get('/', async (req, res) => {
  try {
    // Get all employees and JOIN with their role and pto balance
    const employeeData = await Employee.findAll({
      include: [
        {
          model: Roles,
          attributes: ['title', 'salary'],
          required: true,
        },
        {
          model: Leave,
          attributes: ['leave_balance'],
          required: true,
        },
      ],
    });
    // Serialize data so the template can read it
    const employees = employeeData.map((employee) => employee.get({ plain: true }));

    // Send employee info to dasboard
    res.render('allEmployees', { 
      employees,
      loggedIn: req.session.loggedIn,
    });
  } 
  catch(err) {
    res.status(500).json(err);
  }
});

// GET employee by id
router.get('/:id', async (req, res) => { // URL is /api/employee/:id
  try {
    const employeeData = await Employee.findByPk(req.params.id, {
      include: [
        {
          model: Roles,
          as: 'Roles',
          required: true,
        },
        {
          model: Leave,
          as: 'Balance',
          required: true,
        },
      ],
    });

    const employee = employeeData.get({ plain: true });

    res.render('employee', {
      ...employee
    });
  } 
  catch(err) {
    res.status(500).json(err);
  }
})

// PUT update employee
router.put('/:id', async (req, res) => { // URL is /api/employee/:id
  try {
    const employeeData = await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!employeeData[0]) {
      res.status(404).json({ message: 'Unable to update employee!' });
      return;
    }

    res.status(200).json(employeeData);
  } 
  catch(err) {
    res.status(500).json(err);
  }
});

// POST new employee
router.post('/add', async (req, res) => { // URL is /api/employee/add
  // create a new employee using Employee model
  try {
    const employeeData = await Employee.create({
    where: {  name: req.body.employeeName,
      role_id: req.body.employeeRoleId,
    }
    });
    res.status(200).json(employeeData);
    return;
  }
  catch(err) {
    res.status(400).json(err);
  }
});

// DELETE employee
// Possibly just archive employee instead?
router.delete('/:id', async (req, res) => { // URL is /api/employee/:id
  try {
    // Archive employee
    const employeeArchive = await Employee.findByPk(req.params.id);
    employeeArchive.archived = true;

    const employeeData = await Employee.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!employeeData) {
      res.status(404).json({ message: 'No employee found with this id!' });
      return;
    }

    res.status(200).json(employeeData);
  }
  catch(err) {
    res.status(500).json(err)
  }
});

// POST create leave request - moving this to dashboard for testing
// router.post('/leave', async (req, res) => { // URL is /api/employee/leave
//   try {
//     const leaveData = await Leave.create({ // Do we need to add this to the model?
//       leave_type: req.body.leave_type,
//       start_date: req.body.start_date,
//       end_date: req.body.end_date,
//       reason: req.body.reason,
//     });

//     res.status(200).json(leaveData);
//   } 
//   catch(err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;
