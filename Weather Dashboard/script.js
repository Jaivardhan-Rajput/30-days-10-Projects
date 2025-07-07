let apiKey = "3ac052d4e7de4c91a1b132133250607";
let city = "Delhi";

function updateDateTime() {
  const now = new Date();
  document.getElementById("date").innerText = now.toLocaleDateString();
  document.getElementById("time").innerText = now.toLocaleTimeString();
  document.getElementById("city").innerText = city;
}
setInterval(updateDateTime, 1000);
updateDateTime();

function searchCity() {
  const input = document.getElementById("cityInput").value;
  if (input.trim() !== "") {
    city = input.trim();
    updateDateTime();
    fetchWeather();
  }
}

async function fetchWeather() {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (data.error) {
      throw new Error(data.error.message);
    }

    updateCurrentWeather(data.current, data.location, data.forecast.forecastday[0].astro);
    updateWeeklyForecast(data.forecast.forecastday);
  } 
  catch (err) {
    alert("Error fetching data. Try another city.");
    console.error(err);
  }
}



// ========== Update Current Weather ==========
function updateCurrentWeather(current, location ,astro) {

  document.getElementById("temp").textContent = `${current.temp_c}°C`;
  document.getElementById("weatherIcon").src = `https:${current.condition.icon}`;
  document.getElementById("conditionText").textContent = current.condition.text;

  const conditionLabels = [];
  if (current.wind_kph > 20) conditionLabels.push("Windy");
  if (current.cloud > 50) conditionLabels.push("Cloudy");
  if (current.uv > 5) conditionLabels.push("High UV");

  document.getElementById("extraConditions").textContent = conditionLabels.length
    ? conditionLabels.join(", ")
    : "Clear Sky";

  document.getElementById("feelsLike").textContent = `${current.feelslike_c}°C`;
  document.getElementById("humidity").textContent = `${current.humidity}%`;
  document.getElementById("wind").textContent = `${current.wind_kph} kph`;
  document.getElementById("visibility").textContent = `${current.vis_km} km`;
  document.getElementById("pressure").textContent = `${current.pressure_mb} mb`;
  document.getElementById("cloud").textContent = `${current.cloud}%`;

  // Extra Weather Info
  document.getElementById("extraDetails").innerHTML = `
    <span>Sunrise: <strong>${astro.sunrise}</strong></span>
    <span>Sunset: <strong>${astro.sunset}</strong></span>
    <span>UV Index: <strong>${current.uv}</strong></span>
  `;
}

function updateWeeklyForecast(forecastDays) {
  const container = document.getElementById("forecastGrid");
  container.innerHTML = "";

  forecastDays.forEach((day) => {
    const date = new Date(day.date);
    const dayName = date.toLocaleDateString(undefined, { weekday: "short" });

    const forecastHTML = `
      <div class="forecastDay">
        <strong>${dayName}</strong>
        <img src="https:${day.day.condition.icon}" alt="icon" />
        <div>${day.day.condition.text}</div>
        <div>Max: ${day.day.maxtemp_c}°C</div>
        <div>Min: ${day.day.mintemp_c}°C</div>
        <div>Avg: ${day.day.avgtemp_c}°C</div>
      </div>
    `;
    container.innerHTML += forecastHTML;
  });
}

// Initial Load
fetchWeather();
