const Employee = require('./Employee');
const Roles = require ('./Roles')
const Leave = require('./Leave');
const User = require('./User')

Employee.hasMany(Leave, {
   foreignKey: 'employee_id',
   onDelete: 'CASCADE'
 });
 
Leave.belongsTo(Employee, {
   foreignKey: 'employee_id'
 });

 Employee.hasOne(Roles, {
  foreignKey: 'roles_id'
 }); 
 
 Roles.hasMany(Employee, {
  foreignKey: 'roles_id'
 }); 

module.exports = { Employee, Roles, Leave, User};