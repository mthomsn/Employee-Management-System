const router = require('express').Router();
const { Employee, Leave } = require('../../models');
const withAuth = require('../../utils/helpers');

// get employees to display in leave balance table on dashboard
router.get('/', withAuth, async (req, res) => {
   try {
     const employeeData = await Employee.findAll({
      include: [Leave]
     });
 
     const employees = employeeData.map((employee) => employee.get({ plain: true }));
 
     res.render('leaveBalanceTable', {
       layout: 'dashboard',
       employees,
     });
   } catch (err) {
     res.redirect('login');
   }
 });

 module.exports = router;