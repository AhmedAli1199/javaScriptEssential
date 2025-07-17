

function showWeatherReport(event) {
    // This function will display the weather report
    event.preventDefault();

    const weatherInfoDiv = document.getElementById("weatherInfo");

    const city = document.getElementById("city").value;
    const API = "YOUR_API_KEY"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;

    fetch(url, { method: 'GET' }).then(response => {
        return response.json();
    }).then(data => {
      
      if (data.cod !== 200) {
            weatherInfoDiv.innerHTML = `<p>Error: ${data.message}</p>`;
            return;
        }
      
        weatherInfoDiv.innerHTML = `<h1>Weather Report for ${data.name}</h1>`
        weatherInfoDiv.innerHTML += `<p><strong>Weather Description:</strong> ${ data.weather[0].description}</p>`;

        weatherInfoDiv.innerHTML += `<p><strong>Temperature:</strong> ${data.main.temp} °C</p>`;
        weatherInfoDiv.innerHTML += `<p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>`;
        weatherInfoDiv.innerHTML += `<p><strong>Humidity:</strong> ${data.main.humidity}%</p>`;
        weatherInfoDiv.innerHTML += `<p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>`;

    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherInfoDiv.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    });


 }

 document.getElementById('weatherForm').addEventListener('submit', showWeatherReport);