function updateClock() {
    const now = new Date();
    
    // Get time components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zero for single digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Update time display
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Update date display
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', dateOptions);
}

// Update clock immediately and every second
updateClock();
setInterval(updateClock, 1000);
