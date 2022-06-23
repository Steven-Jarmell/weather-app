import { getData } from "./weather";

const searchForm = document.getElementById('searchForm');
const searchItem = document.getElementById('search-bar');
const submitBtn = document.querySelector('.submit-btn');
const mode = document.querySelector('.toggle-input');
let dataType = false; // True -> Fahrenheit ; False -> Celsius
let submitted = false;

searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
});

const temperature = document.querySelector('.temperature');
const feelsLike = document.querySelector('.feelsLike');

submitBtn.addEventListener('click', async (e) => {
    if (searchItem.value === "") return;

    const data = await getData(searchItem.value);

    submitted = true;
    const displayContent = document.querySelector('.search-result');
    displayContent.classList.add('visible');

    const cityName = document.querySelector('.cityName');
    cityName.innerText = data.cityName;

    if (dataType) {
        temperature.innerText = 'Temperature: ' + convertToFahrenheit(data.temperature);
        feelsLike.innerText = 'Feels Like: ' + convertToFahrenheit(data.feelsLike);
    }
    else {
        temperature.innerText = 'Temperature: ' + Math.round(data.temperature);
        feelsLike.innerText = 'Feels Like: ' + Math.round(data.feelsLike);
    }

    const humidity = document.querySelector('.humidity');
    humidity.innerText = 'Humidity: ' + data.humidity + '%';
});

mode.addEventListener('click', (e) => {
    dataType = !dataType;

    if (searchItem.value === "" || !submitted) return;

    if (dataType) {
        temperature.innerText = 'Temperature: ' + convertToFahrenheit(parseInt(temperature.innerText.split(' ')[1]));
        feelsLike.innerText = 'Feels Like: ' + convertToFahrenheit(parseInt(feelsLike.innerText.split(' ')[2]));
    }
    else {
        temperature.innerText = 'Temperature: ' + convertToCelsius(parseInt(temperature.innerText.split(' ')[1]));
        feelsLike.innerText = 'Feels Like: ' + convertToCelsius(parseInt(feelsLike.innerText.split(' ')[2]));
    }
});

function convertToFahrenheit(number) {
    return Math.round(number * (9/5) + 32);
}

function convertToCelsius(number) {
    return Math.round((number - 32) * (5/9));
}