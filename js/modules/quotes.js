import getRandomNum from './getRandomNum.js';
const  quotes  = (q,a,changeQuote)=> {

    const quot = document.querySelector(q),
    auth = document.querySelector(a),
    change = document.querySelector(changeQuote);


function getQuotes() {
  const quotes = 'dataEnRuQuotes.json';
  fetch(quotes)
    .then(res => { return res.json();})
    .then(data => {
      quot.textContent = data[10].ru.text;
      auth.textContent = data[10].ru.author;

      function getQuotes() {
          let random;
       do {
           random = getRandomNum(1, data.length);
       } while (random === getQuotes.last);

       getQuotes.last = random;  // получаем уникальное число
       
      for(let key in data){ // записываем в html цитату и автора
              if(+key === +random){
                if(window.location.hash === '#ru'){
                    quot.innerHTML = data[key].ru.text;
                    auth.innerHTML = data[key].ru.author;
                }else if(window.location.hash === '#en'){
                    quot.innerHTML = data[key].en.text;
                    auth.innerHTML = data[key].en.author;
                }

              }
          }

      }

      change.addEventListener('click', getQuotes);
      window.addEventListener('load', getQuotes);

    });
}

getQuotes();

};
export default quotes;
