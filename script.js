const apiKey = "bc4cfd5bf4905ee3d4e91c7e8165fc8a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".hero input");
const searchButton = document.querySelector(".hero button");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (response.ok) {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = "Temperature : " + Math.round(data.main.temp) + " °C";
        document.querySelector(".humd").innerHTML = "Humidity : " + data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = "Wind Speed : " + Math.round(data.wind.speed) + " km/h";
    } else {
        alert("Invalid city name. Please enter a valid city name.");
    }
}

searchBox.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
})

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
