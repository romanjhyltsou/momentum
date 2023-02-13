import getTimeOfDay from './getTimeOfDay.js';
const showGreeting = (greeting) => {
const greetingClass = document.querySelector(greeting),
greetingInputName = document.querySelector('.name'),
todoInput = document.querySelector('.todo-input');

greetingInputName.placeholder = '[Введите имя]';
todoInput.placeholder = 'Добавить заметку...';
  const timeOfDay = getTimeOfDay();
  if(timeOfDay === 'morning'){
    greetingClass.textContent = `Доброй утро`;
  }else if(timeOfDay === 'afternoon'){
    greetingClass.textContent = `Доброй день`;
  }else if(timeOfDay === 'evening'){
    greetingClass.textContent = `Доброй вечер`;
  }else if(timeOfDay === 'night'){
    greetingClass.textContent = `Доброй ночи`;
  }

 /*  greetingClass.textContent = `Доброй ${timeOfDay}`; */

};
    
export default showGreeting;
