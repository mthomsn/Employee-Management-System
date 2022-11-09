const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const loginRoutes = require('./login-routes');
const dashboardRoutes = require('./dashboard-routes')

// current URL is /api
router.use('/employee', employeeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);

module.exports = router;