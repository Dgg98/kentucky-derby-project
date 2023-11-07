const seconds = document.querySelector(".seconds .number");
const minutes = document.querySelector(".minutes .number");
const hours = document.querySelector(".hours .number");
const days = document.querySelector(".days .number");

let secValue = 37,
minValue = 56,
hourValue = 13,
dayValue = 186;

const timeFunction = setInterval(() => {
    secValue--;

    if (secValue === 0){
        minValue--;
        secValue = 60;
    }

    if (minValue === 0) {
        hourValue--;
        minValue = 60;
    }

    if (hourValue === 0) {
        dayValue--;
        hourValue = 60;
    }

    if (dayValue === 0) {
        clearInterval(timeFunction);
    }
    
    seconds.textContent = secValue;
    minutes.textContent = minValue;
    hours.textContent = hourValue;
    days.textContent = dayValue;
},1000) //1000ms = 1s