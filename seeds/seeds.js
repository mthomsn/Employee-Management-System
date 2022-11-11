const sequelize = require('../config/connection');
const { Roles, Employee, Leave } = require('../models');

// const roleData = require('./roles.json');
// const employeeData = require('./employee.json');

const roleData = [
  {
    "id": 1,
    "title": "Senior Staff Engineer",
    "salary": 100000.00
  },
  {
    "id": 2,
    "title": "Senior Engineer",
    "salary": 100000.00
  },
  {
    "id": 3,
    "title": "Mid-level Engineer",
    "salary": 100000.00
  },
  {
    "id": 4,
    "title": "Junior Engineer",
    "salary": 100000.00
  },
  {
    "id": 5,
    "title": "Technician",
    "salary": 100000.00
  },
  {
    "id": 6,
    "title": "Project Manager",
    "salary": 100000.00
  }
];

const employeeData = [
  {
    "name": "Matt Thomsen",
    "start_date": "10/31/2022",
    "role_id": 2
  },
  {
    "name": "Sarah Thoorens",
    "start_date": "11/2/2022",
    "role_id": 1
  },
  {
    "name": "Ike Nwachukwu",
    "start_date": "11/3/2022",
    "role_id": 3
  },
  {
    "name": "Negin Namiranian",
    "start_date": "11/4/2022",
    "role_id": 4
  },
  {
    "name": "Ian Darland",
    "start_date": "11/5/2022",
    "role_id": 5
  },
  {
    "name": "Diem Ly",
    "start_date": "11/6/2022",
    "role_id": 6
  }
];

const leaveData = [
  {
    "leave_balance": 40,
    "employee_id": 1
  },
  {
    "leave_balance": 40,
    "employee_id": 2
  },
  {
    "leave_balance": 40,
    "employee_id": 3
  },
  {
    "leave_balance": 40,
    "employee_id": 4
  },
  {
    "leave_balance": 40,
    "employee_id": 5
  },
  {
    "leave_balance": 40,
    "employee_id": 6
  }
]

const seedRoles = () => Roles.bulkCreate(roleData);
const seedEmployees = () => Employee.bulkCreate(employeeData);
const seedLeaves = () => Leave.bulkCreate(leaveData);

seedRoles();
seedEmployees();
seedLeaves();