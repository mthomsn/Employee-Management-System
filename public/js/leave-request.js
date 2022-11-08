// function to create new leave request
const newLeaveRequest = async (event) => {
  event.preventDefault();

  // confirm query selector is correct
  const leave_type = document.querySelector('#leave-type').value.trim();
  const start_date = document.querySelector('#start-date').value.trim();
  const end_date = document.querySelector('#end-date').value.trim();
  const reason = document.querySelector('#reason').value.trim();

  if (leave_type && start_date && end_date && reason) {
    const response = await fetch(`/api/employee/leave`, {
      method: 'POST',
      body: JSON.stringify({ leave_type, start_date, end_date, reason }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/leave'); // where do we want to redirect to?
    } else {
      alert('Failed to create new leave request.');
    }
  }
};

// Add event listener to create new leave request
document // need to confirm this is the correct element
  .querySelector('.new-leave-request-form').addEventListener('submit', newLeaveRequest);