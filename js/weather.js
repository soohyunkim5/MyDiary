const API_KEY = "";

function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                city.textContent = data.name;
                weather.textContent = `${data.weather[0].main} / ${data.main.temp}`
            }
        )
}


function geoError() {
    alert("I can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

