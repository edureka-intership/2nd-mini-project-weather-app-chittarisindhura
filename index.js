const weatherAPI = [
  {
    id: 1,
    country: "Australia",
    weather: "24°C",
    humidity: "23%",
    windSpeed: "12km/h",
  },
  {
    id: 2,
    country: "Brazil",
    weather: "-1°C",
    humidity: "68%",
    windSpeed: "2km/h",
  },
  {
    id: 3,
    country: "China",
    weather: "9°C",
    humidity: "91%",
    windSpeed: "24km/h",
  },
  {
    id: 4,
    country: "France",
    weather: "27°C",
    humidity: "78%",
    windSpeed: "22km/h",
  },
  {
    id: 5,
    country: "Germany",
    weather: "2°C",
    humidity: "100%",
    windSpeed: "5km/h",
  },
  {
    id: 6,
    country: "India",
    weather: "28°C",
    humidity: "24%",
    windSpeed: "10km/h",
  },
  {
    id: 7,
    country: "Japan",
    weather: "18°C",
    humidity: "60%",
    windSpeed: "4km/h",
  },
  {
    id: 8,
    country: "Tokyo",
    weather: "18°C",
    humidity: "62%",
    windSpeed: "7km/h",
  },
  {
    id: 9,
    country: "Mexico",
    weather: "-1°C",
    humidity: "73%",
    windSpeed: "5km/h",
  },
  {
    id: 10,
    country: "New Zealand",
    weather: "15°C",
    humidity: "60%",
    windSpeed: "3km/h",
  },
  {
    id: 11,
    country: "Russia",
    weather: "-24°C",
    humidity: "97%",
    windSpeed: "4km/h",
  },
  {
    id: 12,
    country: "Singapore",
    weather: "33°C",
    humidity: "55%",
    windSpeed: "15km/h",
  },
  {
    id: 13,
    country: "Thailand",
    weather: "31°C",
    humidity: "64%",
    windSpeed: "8.23km/h",
  },
  {
    id: 14,
    country: "United Kingdom",
    weather: "8°C",
    humidity: "77%",
    windSpeed: "13km/h",
  },
  {
    id: 15,
    country: "United States of America",
    weather: "2°C",
    humidity: "30%",
    windSpeed: "4km/h",
  },
  {
    id: 16,
    country: "Venezuela",
    weather: "23°C",
    humidity: "95%",
    windSpeed: "2km/h",
  },
];

function searchWeather() {
  let select = document.getElementById("selectWeather");
  let weatherTemp = document.getElementById("weather");
  let temperature = document.getElementById("temp");
  let climateDiv = document.getElementById("climate");
  let scatteredClouds = document.getElementById("scatteredClouds");
  let humidityValue = document.getElementById("humidity");
  let windSpeedValue = document.getElementById("windSpeed");
  let scatter = document.getElementById("scattered");

  scatteredClouds.innerHTML =
    '<i class="fa-solid fa-cloud" aria-hidden="true"></i> Scattered clouds';
  let humidity = document.createElement("p");
  scatter.appendChild(humidity);
  var option = select.options[select.selectedIndex];
  let options = select.options[select.selectedIndex].value;
  weatherTemp.innerHTML = `Weather in ${options}`;

  console.log(options, "options");
  if (options === "search for weather") {
    climateDiv.classList.add("hide");
  }
  const weather = weatherAPI.forEach((i, key) => {
    key = i.id;
    if (options === i.country) {
      climateDiv.classList.remove("hide");
      let windSpeed = document.createElement("p");
      scatter.appendChild(windSpeed);
      console.log(i.weather);
      temperature.innerText = i.weather;
      humidityValue.innerText = "Humidity: " + i.humidity;
      windSpeedValue.innerText = "Wind Speed: " + i.windSpeed;
    }
  });
}
