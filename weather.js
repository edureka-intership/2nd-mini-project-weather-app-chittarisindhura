let API_KEY = "49b7b72761bf75e4383ed611d3c85747";
const weatherApi = () => {
  let city = document.getElementById("searchCity").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`,
    { method: "GET" }
  )
    .then((res) => res.json())
    .then((data) => {
      searchWeather(data);
    });
};

const searchWeather = (weatherData) => {
  let climateDiv = document.getElementById("climate");
  if (weatherData.cod === "400" || weatherData.cod === "404") {
    let climateDiv = document.getElementById("climate");
    climateDiv.classList.add("hide");
    alert("No city found");
  } else {
    climateDiv.classList.remove("hide");
    let tempDigits = (weatherData.main.temp / 10).toFixed(2);
    let weatherTemp = document.getElementById("weather");
    let temperature = document.getElementById("temp");
    let scatteredClouds = document.getElementById("scatteredClouds");
    let humidityValue = document.getElementById("humidity");
    let windSpeedValue = document.getElementById("windSpeed");
    weatherTemp.innerHTML = `Weather in ${weatherData.name}`;
    temperature.innerHTML = tempDigits + "°C";
    scatteredClouds.innerHTML = `<i class="fa-solid fa-cloud" aria-hidden="true"></i> ${weatherData.weather[0].description}`;
    humidityValue.innerHTML = "Humidity: " + weatherData.main.humidity + "%";
    windSpeedValue.innerHTML = "Wind Speed: " + weatherData.wind.speed + "km/h";
  }
};
