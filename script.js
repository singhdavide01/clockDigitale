function updateClock() {
  const now = new Date();

  // Get hours, minutes, seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros (e.g., 09 instead of 9)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the time
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

// Run the function every second
setInterval(updateClock, 1000);

// Run once at page load
updateClock();
