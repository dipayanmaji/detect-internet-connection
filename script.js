const statusText = document.querySelector(".status-text");

const checkStatus = async () => {
    try {
        // Send request to server & Return true if status is success (2xx)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return response.status >= 200 && response.status < 300;
    } catch (error) {
        return false; // Return false on error
    }
}

// update status message and class name function
const updateMessage = async () => {
    const status = await checkStatus();
    statusText.innerText = `You're ${status ? 'online' : 'offline'} now!`;
    statusText.className = `status-text ${status ? "connected" : "disconnected"}`;
}

// Check status 1st time, update status message and class name
updateMessage();

// Check status every 3 seconds, update status message and class name
setInterval(updateMessage, 3000);