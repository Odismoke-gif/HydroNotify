// Check if the browser supports notifications
if ("Notification" in window) {
    document.getElementById("enable-notifications").addEventListener("click", () => {
        // Ask the user for permission to show notifications
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                document.getElementById("status").textContent = "Notifications enabled!";
                startReminder();
            } else {
                document.getElementById("status").textContent = "Notifications denied.";
            }
        });
    });
} else {
    document.getElementById("status").textContent = "Your browser does not support notifications.";
}

// Function to send notifications
function sendNotification() {
    const notification = new Notification("Drink Water!", {
        body: "It's time to drink water. Stay hydrated!",
        icon: "https://img.icons8.com/ios/452/water.png", // Example icon
    });
}

// Function to start reminders every hour
function startReminder() {
    // Send a notification every hour (3600000 ms)
    setInterval(() => {
        sendNotification();
    }, 3600000);
}
