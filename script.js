const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const CITY_ID = 'YOUR_CITY_ID'; // Replace with the appropriate city ID or use coordinates
let slideIndex = 0;

function updateWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherDisplay = document.getElementById('weather-display');
            weatherDisplay.innerHTML = `Weather: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeDisplay.textContent = `Current Time: ${timeString}`;
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

window.onload = function() {
    updateWeather();
    setInterval(updateTime, 1000);
    showSlides();
};
