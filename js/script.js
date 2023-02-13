import clockAndCalendar from './modules/clockAndCalendar.js';
import getimageSlider from './modules/getimageSlider.js';
import enterName from './modules/enterName.js';
import weatherApi from './modules/weatherApi.js';
import quotes from './modules/quotes.js';
import audioPlayer from './modules/audioPlayer.js';
import setting from './modules/setting.js';
import toDoList from './modules/toDoList.js';
import translate from './modules/translate.js';

window.addEventListener('DOMContentLoaded', () => {
 "use strict"; 

 clockAndCalendar('.time','.date');
 getimageSlider('body');
 enterName('.name');
 weatherApi();
 quotes('.quote','.author','.change-quote');
 audioPlayer();
 setting();
 toDoList();
 translate();

 console.log(`
1.Часы и календарь \n 
2.Приветствие \n
3.Смена фонового изображения \n 
4.Виджет погоды \n 
5.Виджет цитата дня \n 
6.Аудиоплеер \n 
7.Продвинутый аудиоплеер (реализуется без использования библиотек) \n 
8.Перевод приложения на два языка (en/ru или en/be) \n 
9.Получение фонового изображения от API \n 
10.Настройки приложения \n 
11.ToDo List\n
Для связи со мной: \n

Телеграмм: @Roma6858\n

discord: romanjhyltsou#6635\n
`);


});