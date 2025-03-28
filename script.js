const API_KEY = 'd25f825b4fe9301bc9557b613db79ea7';
const LATITUDE = '43.402649657482286';
const LONGITUDE = '-95.72192488274663';
let slideIndex = 0;

function updateWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=metric`)
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
    slides[slideIndex - 1].style.display = "block
