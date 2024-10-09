const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

// Get the button and input field elements
const getWeatherBtn = document.getElementById('getWeatherBtn');
const locationInput = document.getElementById('locationInput');
const weatherDisplay = document.getElementById('weatherDisplay');

// Function to fetch weather data
async function getWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            weatherDisplay.innerHTML = `<p>City not found. Please try again.</p>`;
        }
    } catch (error) {
        weatherDisplay.innerHTML = `<p>Failed to fetch weather data. Please check your connection.</p>`;
    }
}

// Function to display weather data
function displayWeather(data) {
    const city = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    weatherDisplay.innerHTML = `
        <h2>Weather in ${city}, ${country}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}

// Event listener for button click
getWeatherBtn.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        getWeather(location);
    }
});
