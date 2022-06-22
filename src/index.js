import { getData } from "./weather";

const searchForm = document.getElementById('searchForm');
const searchItem = document.getElementById('search-bar');
const submitBtn = document.querySelector('.submit-btn');

searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
});

submitBtn.addEventListener('click', async (e) => {
    if (searchItem.value === "") return;
    const data = await getData(searchItem.value);

    const cityName = document.querySelector('.cityName');
    cityName.innerText = data.cityName;

    const temperature = document.querySelector('.temperature');
    temperature.innerText = data.temperature;

    const feelsLike = document.querySelector('.feelsLike');
    feelsLike.innerText = data.feelsLike;

    const humidity = document.querySelector('.humidity');
    humidity.innerText = data.humidity;

    const wind = document.querySelector('.wind');
    wind.innerText = data.windSpeed;
})