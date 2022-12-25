const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');
const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const API_KEY = 'c79d6b0b6b145a6a4e03b88f35fc08cb';
let resultatsAPI;
let resultat;

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM'
    let heureActuelle = hour;

    for (let i = 0; i < heure.length; i++) {

        let heureIncr = heureActuelle + i * 3;

        if (heureIncr > 24) {
            heure[i].innerText = `${heureIncr - 24} h`;
        } else if (heureIncr === 24) {
            heure[i].innerText = "00 h"
        } else {
            heure[i].innerText = `${heureIncr} h`;
        }

    }

    timeEl.innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]

}, 1000);



// navigateur location (your location)
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        let long = position.coords.longitude;
        let lat = position.coords.latitude;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {

                resultatsAPI = data;
                console.log(data) ;

                for (let j = 0; j < tempPourH.length; j++) {
                    tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                }
                showWeatherData(data);

            })

    },

        () => {
            alert(`Please Allow Website to access to your location !`)

        })


}

//Search city 
function getinfo() {
    var newName = document.getElementById("cityInput").value.toUpperCase();
    console.log(newName)
    switch (newName) {

        case ("BIZERTE"):
            let Longitude = 9.8739100;
            let Latitude = 37.2744200;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude}&lon=${Longitude}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;

        case ("KEF"):
            let Longitude1 = 8.7048600;
            let Latitude1 = 36.1742400;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude1}&lon=${Longitude1}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("NABEUL"):
            let Longitude2 = 10.715423;
            let Latitude2 = 36.455066;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude2}&lon=${Longitude2}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("SFAX"):
            Longitude3 = 10.766163;
            Latitude3 = 34.747847;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude2}&lon=${Longitude3}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("JENDOUBA"):
            Longitude4 = 8.7802400;
            Latitude4 = 36.5011400;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude4}&lon=${Longitude4}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("MONASTIR"):
            Longitude5 = 10.8261700;
            Latitude5 = 35.7779900;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude5}&lon=${Longitude5}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("KAIROUAN"):
            Longitude6 = 10.0963300;
            Latitude6 = 35.6781000;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude6}&lon=${Longitude6}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("HAMMAMET"):
            Longitude6 = 10.6166700;
            Latitude6 = 36.4000000;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude6}&lon=${Longitude6}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("BEJA"):
            Longitude7 = 9.1816900;
            Latitude7 = 36.7256400;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude7}&lon=${Longitude7}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("KASSERINE"):
            Longitude8 = 8.8365100;
            Latitude8 = 35.1675800;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude8}&lon=${Longitude8}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("SIDI BOUZID"):
            Longitude9 = 9.4849400;
            Latitude9 = 35.0382300;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude9}&lon=${Longitude9}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("GAFSA"):
            Longitude10 = 8.7841700;
            Latitude10 = 34.4250000;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude10}&lon=${Longitude10}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("GABES"):
            Longitude11 = 10.0982000;
            Latitude11 = 33.8814600;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude11}&lon=${Longitude11}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("TATAOUINE"):
            Longitude12 = 10.4517700;
            Latitude12 = 32.9296700;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude12}&lon=${Longitude12}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("SILIANA"):
            Longitude13 = 9.3708200;
            Latitude13 = 36.0849700;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude13}&lon=${Longitude13}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("SOUSSE"):
            Longitude14 = 10.6369900;
            Latitude14 = 35.8253900;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude14}&lon=${Longitude14}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("MAHDIA"):
            Longitude15 = 11.0622200;
            Latitude15 = 35.5047200;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude15}&lon=${Longitude15}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("SIDI BOUZID"):
            Longitude16 = 9.4849400;
            Latitude16 = 35.0382300;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude16}&lon=${Longitude16}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("MAKTAR"):
            Longitude17 = 9.203499186;
            Latitude17 = 35.856329908;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude17}&lon=${Longitude17}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("TABARKA"):
            Longitude18 = 8.7580100;
            Latitude18 = 36.9544200;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude18}&lon=${Longitude18}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("TOZEUR"):
            Longitude19 = 8.1335200;
            Latitude19 = 33.9196800;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude19}&lon=${Longitude19}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        case ("MATEUR"):
            Longitude20 = 9.6655700;
            Latitude20 = 37.0404500;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude20}&lon=${Longitude20}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => {

                    resultatsAPI = data;

                    for (let j = 0; j < tempPourH.length; j++) {
                        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
                    }
                    showWeatherData(data);

                })
            break;
        default:
            alert("No country to search ! Try again ");
            break;
    }



}



// Main funtion to insert weather to html
function showWeatherData(data) {
    let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;

    timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + 'N ' + data.lon + 'E'



    currentWeatherItemsEl.innerHTML =
        `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>
    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
    </div>
    
    
    `;

    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
                <div class="temp">Night - ${Math.trunc(day.temp.night)}&#176;C</div>
                <div class="temp">Day - ${Math.trunc(day.temp.day)}&#176;C</div>
            </div>
            
            `
        } else {
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${Math.trunc(day.temp.night)}&#176;C</div>
                <div class="temp">Day - ${Math.trunc(day.temp.day)}&#176;C</div>
            </div>
            
            `
        }



    })

    weatherForecastEl.innerHTML = otherDayForcast;
}