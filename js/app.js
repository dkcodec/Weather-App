const apiKey = "4d898f7710a2f7b821f72e109d1fc67c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather_icon");

async function findWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    let data = await response.json();

    document.querySelector(".city_name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML =
      Math.round(data.wind.speed) + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "dkcodec.github.io/Weather-App/img/cloudy.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "/img/mist.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/img/sun.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/img/rain.png";
    }
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  findWeather(searchBox.value);
});

window.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    findWeather(searchBox.value);
  }
});
