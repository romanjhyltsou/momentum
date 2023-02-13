import getRandomNum from './getRandomNum.js';
import weatherApi from './weatherApi.js';
import showGreetingEn from './showGreetingEn.js';
import showGreeting from './showGreeting.js';
const translate = () => {
    const quote =  document.querySelector('.quote'),
    author =  document.querySelector('.author');

    const selectLng = document.querySelector('.select__lng');

    selectLng.addEventListener('change', changeUrlLanguage);

    let hash;

    function changeUrlLanguage(){
       let lang = selectLng.value;
       location.href = `${window.location.pathname}#${lang}`;

       changeLanguage();
    }
    

    function changeLanguage(){
            hash = window.location.hash;
            hash = hash.substring(1);
        if(hash === 'en'){
            localStorage.setItem('langruen', hash);

            const quotes = 'dataEnRuQuotes.json';
            fetch(quotes)
              .then(res => { return res.json();})
              .then(data => {

                function getQuotes() {
                    let random;
                 do {
                     random = getRandomNum(1, data.length);
                 } while (random === getQuotes.last);
          
                 getQuotes.last = random;  // получаем уникальное число
                 
                for(let key in data){ // записываем в html цитату и автора
                        if(+key === +random){
                          if(window.location.hash === '#ru'){
                              quote.innerHTML = data[key].ru.text;
                              author.innerHTML = data[key].ru.author;
                          }else if(window.location.hash === '#en'){
                              quote.innerHTML = data[key].en.text;
                              author.innerHTML = data[key].en.author;
                          }
          
                        }
                    }
                }
                getQuotes();

              });

              const data = 'data.json';
              fetch(data)
                .then(res => { return res.json();})
                .then(data => {
                    for(let key in data){
                        document.querySelector(`.lng-${key}`).textContent = data[key].en;
                    }

                    let yes = document.querySelectorAll(`.lng-yes`);
                    let no = document.querySelectorAll(`.lng-no`);
                    for(let i = 0 ; i < yes.length; i++){
                        yes[i].innerHTML = 'yes';
                        no[i].innerHTML = 'no';
                    }
                });

                    weatherApi();

        }else if (hash ==='ru'){
            localStorage.setItem('langruen', hash);
            const quotes = 'dataEnRuQuotes.json';
            fetch(quotes)
              .then(res => { return res.json();})
              .then(data => {

                function getQuotes() {
                    let random;
                 do {
                     random = getRandomNum(1, data.length);
                 } while (random === getQuotes.last);
          
                 getQuotes.last = random;  // получаем уникальное число
                 
                for(let key in data){ // записываем в html цитату и автора
                        if(+key === +random){
                          if(window.location.hash === '#ru'){
                              quote.innerHTML = data[key].ru.text;
                              author.innerHTML = data[key].ru.author;
                          }else if(window.location.hash === '#en'){
                              quote.innerHTML = data[key].en.text;
                              author.innerHTML = data[key].en.author;
                          }
          
                        }
                    }
                }
                getQuotes();

              });

              const data = 'data.json';
              fetch(data)
                .then(res => { return res.json();})
                .then(data => {
                    for(let key in data){
                        document.querySelector(`.lng-${key}`).textContent = data[key].ru;
                    }

                    let yes = document.querySelectorAll(`.lng-yes`);
                    let no = document.querySelectorAll(`.lng-no`);
                    for(let i = 0 ; i < yes.length; i++){
                        yes[i].innerHTML = 'да';
                        no[i].innerHTML = 'нет';
                    }
                });

                weatherApi();
        }

    }
    window.addEventListener('load', setLocalStorageLng);

    function setLocalStorageLng(){
        if (localStorage.getItem('langruen') === 'en'){
            changeLanguage();
            showGreetingEn('.greeting');
            
            document.querySelector('.russia').removeAttribute('selected', '');
            document.querySelector('.english').setAttribute('selected', '');

        }else if (localStorage.getItem('langruen') === 'ru'){
            showGreeting('.greeting');
            document.querySelector('.russia').setAttribute('selected', '');
            document.querySelector('.english').removeAttribute('selected', '');
        }
    }
    
};

export default translate;