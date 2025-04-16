function updateCountdown() {
    const eventDate = new Date("April 10, 2025 10:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft < 0) {
        document.getElementById("timer").innerHTML = "Event has started!";
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const timerInterval = setInterval(updateCountdown, 1000);

document.getElementById("registration-form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault(); // Prevent form submission
    }
});
