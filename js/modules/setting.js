const setting = ()=> {
    const settingSvg = document.querySelector('.setting__svg'),
          containerSettings = document.querySelector('.container_settings'),
    
          localTime = document.querySelectorAll('#local-time'),

          timeBtn = document.querySelector('.time__btn'),
          timeBtnNo = document.querySelector('.time__btn-no'),
          dateBtn = document.querySelector('.date__btn'),
          dateBtnNo = document.querySelector('.date__btn-no'),
          greetingBtn = document.querySelector('.greeting__btn'),
          greetingBtnNo = document.querySelector('.greeting__btn-no'),
          quotesBtn = document.querySelector('.quotes__btn'),
          quotesBtnNo = document.querySelector('.quotes__btn-no'),
          weatherBtn = document.querySelector('.weather__btn'),
          weatherBtnNo = document.querySelector('.weather__btn-no'),
          playerBtn = document.querySelector('.player__btn'),
          playerBtnNo = document.querySelector('.player__btn-no'),

          time = document.querySelector('.time'),
          date = document.querySelector('.date'),
          greetingContainer = document.querySelector('.greeting-container'),
          wrapperChangeQuote = document.querySelector('.wrapper__change-quote'),
          weather = document.querySelector('.weather'),
          player = document.querySelector('.player');
    
    settingSvg.addEventListener('click', ()=> {
        containerSettings.classList.toggle('setting__switch-on-off');
    });

    function setOff(btnYes, btnNo, elem){
        btnYes.classList.add('switch');
        btnNo.classList.remove('switch');
        elem.classList.add('setting__switch-on-off');
        if(btnYes.className.includes('time__btn')){
            localStorage.setItem('timeBtn', localTime[1].innerHTML);
        }else if(btnYes.className.includes('date__btn')){
            localStorage.setItem('dateBtn', localTime[1].innerHTML); 
        }else if(btnYes.className.includes('greeting__btn')){
            localStorage.setItem('greetingBtn', localTime[1].innerHTML); 
        }else if(btnYes.className.includes('quotes__btn')){
            localStorage.setItem('quotesBtn', localTime[1].innerHTML); 
        }else if(btnYes.className.includes('weather__btn')){
            localStorage.setItem('weatherBtn', localTime[1].innerHTML); 
        }else if(btnYes.className.includes('player__btn')){
            localStorage.setItem('playerBtn', localTime[1].innerHTML); 
        }

        
    }

    function setOn(btnYes, btnNo, elem){
        btnNo.classList.add('switch');
        btnYes.classList.remove('switch');
        elem.classList.remove('setting__switch-on-off');
        if(btnNo.className.includes('time__btn-no')){
            localStorage.setItem('timeBtn', localTime[0].innerHTML);  
        }else if(btnNo.className.includes('date__btn-no')){
            localStorage.setItem('dateBtn', localTime[0].innerHTML); 
        }else if(btnNo.className.includes('greeting__btn-no')){
            localStorage.setItem('greetingBtn', localTime[0].innerHTML); 
        }else if(btnNo.className.includes('quotes__btn-no')){
            localStorage.setItem('quotesBtn', localTime[0].innerHTML); 
        }else if(btnNo.className.includes('weather__btn-no')){
            localStorage.setItem('weatherBtn', localTime[0].innerHTML); 
        }else if(btnNo.className.includes('player__btn-no')){
            localStorage.setItem('playerBtn', localTime[0].innerHTML); 
        }
    }


    timeBtn.addEventListener('click', function(){
        setOff(timeBtn, timeBtnNo, time);

    });

    dateBtn.addEventListener('click', function(){
        setOff(dateBtn, dateBtnNo, date);
    });

    greetingBtn.addEventListener('click', function(){
        setOff(greetingBtn, greetingBtnNo, greetingContainer);
    });

    quotesBtn.addEventListener('click', function(){
        setOff(quotesBtn, quotesBtnNo, wrapperChangeQuote);
    });
    weatherBtn.addEventListener('click', function(){
        setOff(weatherBtn, weatherBtnNo, weather);
    });
    playerBtn.addEventListener('click', function(){
        setOff(playerBtn, playerBtnNo, player);
    });
    if(localStorage.getItem('timeBtn') === 'да' || localStorage.getItem('timeBtn') === 'yes'){
        timeBtnNo.classList.add('switch');
        timeBtn.classList.remove('switch');
        time.classList.remove('setting__switch-on-off');
    }
    
    if(localStorage.getItem('dateBtn') === 'да' || localStorage.getItem('dateBtn') === 'yes'){
        dateBtnNo.classList.add('switch');
        dateBtn.classList.remove('switch');
        date.classList.remove('setting__switch-on-off');
    }

    if(localStorage.getItem('greetingBtn') === 'да' || localStorage.getItem('greetingBtn') === 'yes'){
        greetingBtnNo.classList.add('switch');
        greetingBtn.classList.remove('switch');
        greetingContainer.classList.remove('setting__switch-on-off');
    }

    if(localStorage.getItem('quotesBtn') === 'да' || localStorage.getItem('quotesBtn') === 'yes'){
        quotesBtnNo.classList.add('switch');
        quotesBtn.classList.remove('switch');
        wrapperChangeQuote.classList.remove('setting__switch-on-off');
    }

    if(localStorage.getItem('weatherBtn') === 'да' || localStorage.getItem('weatherBtn') === 'yes'){
        weatherBtnNo.classList.add('switch');
        weatherBtn.classList.remove('switch');
        weather.classList.remove('setting__switch-on-off');
    }
    if(localStorage.getItem('playerBtn') === 'да'  || localStorage.getItem('playerBtn') === 'yes'){
        playerBtnNo.classList.add('switch');
        playerBtn.classList.remove('switch');
        player.classList.remove('setting__switch-on-off');
    }

    timeBtnNo.addEventListener('click', function(){
        setOn(timeBtn, timeBtnNo, time);
    });

    dateBtnNo.addEventListener('click', function(){
        setOn(dateBtn, dateBtnNo, date);
    });

    greetingBtnNo.addEventListener('click', function(){
        setOn(greetingBtn, greetingBtnNo, greetingContainer);
    });
    quotesBtnNo.addEventListener('click', function(){
        setOn(quotesBtn, quotesBtnNo, wrapperChangeQuote);
    });
    weatherBtnNo.addEventListener('click', function(){
        setOn(weatherBtn, weatherBtnNo, weather);
    });
    playerBtnNo.addEventListener('click', function(){
        setOn(playerBtn, playerBtnNo, player);
    });

    if(localStorage.getItem('timeBtn') === 'нет' || localStorage.getItem('timeBtn') === 'no'){
        timeBtnNo.classList.remove('switch');
        timeBtn.classList.add('switch');
        time.classList.add('setting__switch-on-off');
    }
    
    if(localStorage.getItem('dateBtn') === 'нет' || localStorage.getItem('dateBtn') === 'no'){
        dateBtnNo.classList.remove('switch');
        dateBtn.classList.add('switch');
        date.classList.add('setting__switch-on-off');
    }

    if(localStorage.getItem('greetingBtn') === 'нет' || localStorage.getItem('greetingBtn') === 'no'){
        greetingBtnNo.classList.remove('switch');
        greetingBtn.classList.add('switch');
        greetingContainer.classList.add('setting__switch-on-off');
    }

    if(localStorage.getItem('quotesBtn') === 'нет' || localStorage.getItem('quotesBtn') === 'no'){
        quotesBtnNo.classList.remove('switch');
        quotesBtn.classList.add('switch');
        wrapperChangeQuote.classList.add('setting__switch-on-off');
    }

    if(localStorage.getItem('weatherBtn') === 'нет' || localStorage.getItem('weatherBtn') === 'no'){
        weatherBtnNo.classList.remove('switch');
        weatherBtn.classList.add('switch');
        weather.classList.add('setting__switch-on-off');
    }
    if(localStorage.getItem('playerBtn') === 'нет' || localStorage.getItem('playerBtn') === 'no'){
        playerBtnNo.classList.remove('switch');
        playerBtn.classList.add('switch');
        player.classList.add('setting__switch-on-off');
    }

};
export default setting;













