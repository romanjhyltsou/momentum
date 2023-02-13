import showGreeting from './showGreeting.js';
import showGreetingEn from './showGreetingEn.js';
import getTimeOfDay from './getTimeOfDay.js';
const clockAndCalendar = (t, d) => {
const timeClass = document.querySelector(t),
      dateClass = document.querySelector(d),
      selectLng = document.querySelector('.select__lng');

function showTime(){
const date = new Date(),
    currentTime = date.toLocaleTimeString();
    timeClass.textContent = currentTime;

    getTimeOfDay();
    setTimeout(showTime, 1000);
}
if(selectLng.value === 'ru'){
    document.querySelector('.city').value = 'Минск';
}else{
    document.querySelector('.city').value = 'Minsk';
} 
function update(){
    showGreeting('.greeting');
    showDate();
    if(selectLng.value === 'ru'){
        showDate();
        showGreeting('.greeting');
    }else{
        showDateEn();
        showGreetingEn('.greeting');
    }
    setTimeout(update, 200);
}
update();

function showDate(){
    const date = new Date(),
          options = {weekday: 'long', month: 'long', day: 'numeric'},
          currentDate = date.toLocaleDateString('ru-RU', options);
        dateClass.textContent = currentDate;
}
function showDateEn(){
    const date = new Date(),
          options = {weekday: 'long', month: 'long', day: 'numeric'},
          currentDate = date.toLocaleDateString('en-EN', options);
        dateClass.textContent = currentDate;
}

showTime();

};

export default clockAndCalendar;