const newFormHandler = async (event) => {
   event.preventDefault();
 
   const employeeName = document.querySelector('#employee-name').value.trim();
   const employeeSalary = document.querySelector('#employee-salary').value.trim();
   const employeeRole = document.querySelector('#employee-role').value.trim();
   const startDate = document.querySelector('#start-date').value.trim();

   if (name && needed_funding && description) {
     const response = await fetch(`/api/employee/edit/:id`, {
       method: 'POST',
       body: JSON.stringify({ employeeName, employeeSalary, employeeRole, startDate }),
       headers: {
         'Content-Type': 'application/json',
       },
     });
 
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert('Failed to edit employee');
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
   .querySelector('#save-employee-button') .addEventListener('click', newFormHandler);
 
 document
   .querySelector('#delete-employee-button').addEventListener('click', delButtonHandler);
 