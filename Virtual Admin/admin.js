let appointment = null;

function bookAppointment() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!date || !time) {
    document.getElementById("result").innerText = "Please select both date and time.";
    return;
  }

  appointment = { date, time };
  document.getElementById("result").innerText =
    `Appointment booked for ${date} at ${time}.`;
}

function cancelAppointment() {
  if (appointment) {
    document.getElementById("result").innerText =
      `Appointment on ${appointment.date} at ${appointment.time} has been canceled.`;
    appointment = null;
  } else {
    document.getElementById("result").innerText = "No appointment to cancel.";
  }
}