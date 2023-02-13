const enterName = (input) => {
    const  inputClass = document.querySelector(input);
   // перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
  function setLocalStorage() {
    localStorage.setItem('name', inputClass.value);
  }

  //перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      inputClass.value = localStorage.getItem('name');
    }
  }

  window.addEventListener('beforeunload', setLocalStorage);
  window.addEventListener('load', getLocalStorage);

};

export default enterName;