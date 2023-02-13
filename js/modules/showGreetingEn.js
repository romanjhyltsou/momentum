import getTimeOfDay from './getTimeOfDay.js';
const showGreetingEn = (greeting) => {
const greetingClass = document.querySelector(greeting),
      greetingInputName = document.querySelector('.name'),
      todoInput = document.querySelector('.todo-input');
        
      greetingInputName.placeholder = '[Enter your name]';
      todoInput.placeholder = 'Add note...';

  const timeOfDay = getTimeOfDay();
  if(timeOfDay === 'morning'){
    greetingClass.textContent = `Good morning`;
  }else if(timeOfDay === 'afternoon'){
    greetingClass.textContent = `Good afternoon`;
  }else if(timeOfDay === 'evening'){
    greetingClass.textContent = `Good evening`;
  }else if(timeOfDay === 'night'){
    greetingClass.textContent = `Good night`;
  }

};
    
export default showGreetingEn;