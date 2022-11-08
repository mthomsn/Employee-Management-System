const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const loginRoutes = require('./login-routes');

// current URL is /api
router.use('/employee', employeeRoutes);
router.use('/login', loginRoutes);

module.exports = router;