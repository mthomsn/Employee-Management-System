// function to create new leave request
const newLeaveRequest = async (event) => {
  event.preventDefault();

  const employeeID = document.querySelector('#employeeId').value.trim();
  const leave_type = document.querySelector('#leave-type').value.trim();
  const start_date = document.querySelector('#start-date').value.trim();
  const end_date = document.querySelector('#end-date').value.trim();

  if (employeeID && leave_type && start_date && end_date) {
    const response = await fetch(`/dashboard`, {
      method: 'POST',
      body: JSON.stringify({ employeeID, leave_type, start_date, end_date}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/employee/${employeeID}`); 
    } else {
      alert('Failed to create new leave request.');
    }
  }
};

// Add event listener to create new leave request
document.querySelector('#new-leave-request-button').addEventListener('click', newLeaveRequest);