// const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();
  const employeeName = document.querySelector('#employee-name').value.trim();
  const employeeSalary = document.querySelector('#employee-salary').value.trim();
  const employeeRole = document.querySelector('#employee-role').value.trim();
  // const startDate = document.querySelector('#start-date').value.trim();


  await fetch(`/api/employee/${employee_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      employeeName, 
      employeeSalary, 
      employeeRole, 
      // startDate
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
   document.location.replace('/dashboard');
 } else {
   alert('Failed to edit employee');
 }
};

const deleteClickHandler = async function() {
  await fetch(`/api/employee/${employee_id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
   document.location.replace('/dashboard');
 } else {
   alert('Failed to delete employee');
 }
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
