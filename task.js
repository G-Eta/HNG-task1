const dayOfWeekValue = document.getElementById("dayOfWeek");
const utcTimeValue = document.getElementById("utcTime");

function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

function updateUTCTime() {
    utcTimeValue.textContent = getCurrentUTCTime();
}

function getCurrentUTCTime() {
    return Date.now();
}

dayOfWeekValue.textContent = getCurrentDayOfWeek();
updateUTCTime(); 

setInterval(updateUTCTime, 1000);

