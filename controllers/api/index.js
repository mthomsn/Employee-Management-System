const router = require('express').Router();
const userRoutes = require('./user-routes');
const employeeRoutes = require('./employee-routes')

//current URL is api/

router.use('/users', userRoutes);
router.use('/employee', employeeRoutes)


module.exports = router;