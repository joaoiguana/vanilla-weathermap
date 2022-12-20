const handleTemp = document.getElementById('temp');
const handleWind = document.getElementById('windspeed');
const handleWeatherImage = document.getElementById('weather-svg')
const lat = '38.71667';
const long = '-9.13333';

async function getWeather() {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`);
  const data = await response.json();
  console.log(data);

  handleTemp.innerHTML = `Temperature: ${data.current_weather.temperature}${data.hourly_units.temperature_2m}`;
  handleWind.innerHTML = `Windspeed: ${data.current_weather.windspeed}${data.hourly_units.windspeed_10m}`;

  if(data.current_weather.weathercode < 100) {
    handleWeatherImage.innerHTML = '<i class="uil uil-cloud-showers-heavy"></i>'
  }
}

getWeather();
