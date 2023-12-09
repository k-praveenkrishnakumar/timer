document.addEventListener('DOMContentLoaded', function() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('mins');
    const secsEl = document.getElementById('secs');

    const newYears = '1 Jan 2024';
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
        const seconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(seconds / 3600 / 24);
        const hours = Math.floor(seconds / 3600) % 24;
        const mins = Math.floor((seconds / 60)) % 60;
        const secs = Math.floor(seconds) % 60;
    
        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minsEl.innerHTML = mins;
        secsEl.innerHTML = secs;
    }
    
    countdown();
    setInterval(countdown, 1000);
});
