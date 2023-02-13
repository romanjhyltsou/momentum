const weatherApi = () => {
    const weatherIcon = document.querySelector('.weather-icon'),
          temperature = document.querySelector('.temperature'),
          wind = document.querySelector('.wind__speed-num'),
          humidity = document.querySelector('.humidity-num'),
          weather = document.querySelector('.weather'),
          weatherDescription = document.querySelector('.weather-description'),
          city = document.querySelector('.city'),
          lngBtn = document.querySelector('.lng-btn'),
          selectLng = document.querySelector('.select__lng');

async function  getWeather(cit){
try {

    let hash = window.location.hash;
    hash = hash.substring(1);
    let url;

    if( cit === undefined){
            cit = 'Минск'; 
    }
    
    if(hash !== 'ru' && hash !== 'en'){
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cit}&lang=ru&appid=e9f76d22333714bad5efbfc26245d406&units=metric`;
        localStorage.setItem('wetherUrl', url);
    }else if (hash === 'ru' && hash !== 'en'){
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cit}&lang=ru&appid=e9f76d22333714bad5efbfc26245d406&units=metric`;
        localStorage.setItem('wetherUrl', url);
    }else if (hash === 'en' && hash !== 'ru'){
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cit}&lang=en&appid=e9f76d22333714bad5efbfc26245d406&units=metric`;
         cit = 'Minsk';
        localStorage.setItem('wetherUrl', url);
    }

    const res = await fetch(url);
    const data = await res.json();
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }else{
        city.value = cit;
    }

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${parseInt(data.main.temp)}°C`;

    wind.textContent = `${parseInt(data.wind.speed)}`;

    humidity.textContent = `${parseInt(data.main.humidity)}%`;

    weatherDescription.textContent = data.weather[0].description;

    }catch (err) {
        let hash = window.location.hash;
        hash = hash.substring(1);
        if(hash === 'ru'){
            city.value = 'Ой, опечатка';
            weatherDescription.textContent = 'Укажите верный город или исправьте опечатку';
        }else{
            city.value = 'Oops!!!';
            weatherDescription.textContent = 'Enter the correct city or correct the typo';
        }
    city.style.color='red';
    temperature.textContent = ' ';
    wind.textContent = ' ';
    humidity.textContent = ' ';
    function error(){
        city.style.color='white';
        city.value = '';
    }
    setTimeout(error, 500);
    
    console.log(err);
    }

}

getWeather();
 
city.addEventListener('change', ()=>{
    getWeather(city.value);
    localStorage.setItem('city', city.value);
});

};
export default weatherApi;