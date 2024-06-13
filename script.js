//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://openweathermap.org/img/wn/10d@2x.png

const apiKey = '8f5a3e415a8ad1d13e13e5f89b4b1cab';
const form = document.querySelector('form');
const input = form.querySelector('input');
const msg = form.querySelector('msg');
const weather = document.querySelector('weather');

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    const cityName = input.value;
    console.log(cityName);
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    //temperature en °C : ajouter à API &units=metric
    fetch(Url)
       .then(response => response.json())
       .then(data => {
        console.log(data);
        const {main,name,sys,weather} = data;
        const icon = `https://openweathermap.org/img/wn/10d@2x.png ${weather[0].icon}`;
        console.log(icon);
       })
       .catch(err => {
        msg.textContent = 'Veuillez entrer un nom de ville', err;
        console.log(err);
    });


});