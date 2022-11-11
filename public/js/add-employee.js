const newFormHandler = async (event) => {
   event.preventDefault();
 
   const employeeName = document.querySelector('#employee-name').value.trim();
   console.log(employeeName);
   const employeeSalary = document.querySelector('#employee-salary').value.trim();
   console.log(employeeSalary);
  
   const roleEl = document.querySelector('#role-option').value;
   const employeeRoleEl = roleEl.split(" ");
   const employeeRoleId = employeeRoleEl.shift();
   const employeeRole = employeeRoleEl.join(" ");
  console.log(employeeRoleId)
   console.log(employeeRole);
  //  const startDate = $('#start-date').datepicker("getDate")

   if (employeeName && employeeSalary && employeeRoleId) {
     const response = await fetch('/api/employee/add', {
       method: 'POST',
       body: ({ 
        employeeName, 
        employeeSalary, 
        employeeRoleId, 
        //  startDate 
      }),
       headers: {
         'Content-Type': 'text/plain',
       },
     });
 
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert('Failed to add employee');
     }
   }
 };
 
 const delButtonHandler = async (event) => {
   if (event.target.hasAttribute('employee_id')) {
     const id = event.target.getAttribute('employee-id');
 
     const response = await fetch(`/api/employee/edit/${id}`, {
       method: 'DELETE',
     });
 
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert('Failed to delete employee');
     }
   }
 };
 
 document
   .querySelector('#save-employee-button').addEventListener('click', newFormHandler);
 
 document
   .querySelector('#delete-employee-button').addEventListener('click', delButtonHandler);
 