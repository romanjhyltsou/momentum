import getTimeOfDay from './getTimeOfDay.js';
import getRandomNum from './getRandomNum.js';
const getimageSlider = (b) => {

const body = document.querySelector(b),
      slidePrev = document.querySelector('.slide-prev'),
      slideNext = document.querySelector('.slide-next');
let timeOfDay = getTimeOfDay(),
    bgNum = getRandomNum(1,20),
    getRandoPhotoFlickr = getRandomNum(1,100),
    randomNum = bgNum;



function prevGitHub(){
  randomNum--;
  if(randomNum === 0){
     randomNum = 20;
 }
  if (randomNum < 10 && randomNum >= 1){
   bgNum = `0${randomNum}`;
 }else{
   bgNum = '' + randomNum;
 }
 console.log(bgNum);
 setBg(bgNum, timeOfDay);
}
   
slidePrev.addEventListener('click', prevGitHub);

function nextGitHub(){
  randomNum++;
  if(randomNum === 21){
      randomNum = 1;
  }
  if (randomNum < 10 && randomNum >= 1){
   bgNum = `0${randomNum}`;
 }else{
   bgNum = '' + randomNum;
 }
 console.log(bgNum);
 setBg(bgNum, timeOfDay);
}

slideNext.addEventListener('click', nextGitHub);

function setBg(bgNum, timeOfDay){
  console.log("GitHub");
    let img = new Image();
    img.src = `https://raw.githubusercontent.com/romanjhyltsou/imgsmomentum/assets/images/${timeOfDay}/${bgNum}.jpg`; 
    img.onload = () => {
    body.style.background = 'rgba(0, 0, 0, 0.5) center/cover';
    body.style.backgroundImage = `
    url('https://raw.githubusercontent.com/romanjhyltsou/imgsmomentum/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    console.log(img.src);
};

}

setBg(bgNum, timeOfDay);

//Getting background from API --------------------

let tegs;
const getTegsInput = document.querySelector(".input__tags"),
      selectApi = document.querySelectorAll('.select__api');

//Select 
selectApi.forEach(item =>{
  item.addEventListener('change', function(){
     if(item.value === 'GitHub'){

      localStorage.setItem('resourceapi' , item.value);
      
      getTegsInput.setAttribute('disabled', '');
      setBg(bgNum, timeOfDay);
      getTegsInput.value = '';

      slideNext.addEventListener('click', nextGitHub);
      slidePrev.addEventListener('click', prevGitHub);

      slideNext.removeEventListener('click', getDataToUnsplash);
      slidePrev.removeEventListener('click', getDataToUnsplash);

      slideNext.removeEventListener('click', getDataToFlickrNext);
      slidePrev.removeEventListener('click', getDataToFlickrPrev);

     }else if(item.value === 'Unsplash API'){

      localStorage.setItem('resourceapi' , item.value);

      getTegsInput.removeAttribute('disabled');
      getDataToUnsplash();
      slideNext.addEventListener('click', getDataToUnsplash);
      slidePrev.addEventListener('click', getDataToUnsplash);

      slideNext.removeEventListener('click', getDataToFlickrNext);
      slidePrev.removeEventListener('click', getDataToFlickrPrev);

      slideNext.removeEventListener('click', nextGitHub);
      slidePrev.removeEventListener('click', nextGitHub);

     }else if(item.value === 'Flickr API'){

      localStorage.setItem('resourceapi' , item.value);

      getTegsInput.removeAttribute('disabled');
      getDataToFlickrNext();

 
      slideNext.addEventListener('click',getDataToFlickrNext);
      slidePrev.addEventListener('click',getDataToFlickrPrev);

      slideNext.removeEventListener('click', getDataToUnsplash);
      slidePrev.removeEventListener('click', getDataToUnsplash);

      slideNext.removeEventListener('click', nextGitHub);
      slidePrev.removeEventListener('click', nextGitHub);

     }   
  });
});

//Getting background from Unsplash API
async function getDataToUnsplash() {
console.log("Unsplash API");

const urlUnsplash = `https://api.unsplash.com/photos/random?query=${getTag()}&client_id=TYqEJMaycyxp9orFmx5Tzlm_fISCfyXVBdy4u_zuy1E`;
fetch(urlUnsplash)
.then(res => {
  if(res.ok === false && res.status === 403 ||res.ok === false && res.status === 401){
    console.log('На ближайший час хватит, исчерпан лимит запросов на изображения');
    console.log('Demo apps are limited to 50 requests per hour. Learn more.');
  }
  return res.json();
})
.then(data => {
const img = new Image();
img.src = data.urls.regular;

img.onload = () => {
  body.style.backgroundImage = `url('${data.urls.regular}')`;
};
console.log(img.src);

});


}

/// Fliker
  
async function getDataToFlickrNext() {

console.log("Flickr API");
const urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=202018e0cbab0949eef88a5ab3d13432&tags=${getTag()}&extras=url_l&format=json&nojsoncallback=1`;
fetch(urlFlickr)
.then(res => {
  if(res.ok === false && res.status === 403 ||res.ok === false && res.status === 401){
    console.log('На ближайший час хватит, исчерпан лимит запросов на изображения');
    console.log('Demo apps are limited to 50 requests per hour. Learn more.');
  }
/*   console.log(res); */
  return res.json();
})
.then(data => {
/*   console.log(data); */
  if(data.photos.pages === 0){

  }else{
    const img = new Image();
    if(getRandoPhotoFlickr < data.photos.photo.length){
      getRandoPhotoFlickr++;
    }else{
      getRandoPhotoFlickr = 0;
    }
    img.src = data.photos.photo[getRandoPhotoFlickr].url_l;
    img.onload = () => {
      body.style.backgroundImage = `url('${data.photos.photo[getRandoPhotoFlickr].url_l}')`;
    };
    console.log(img.src);
  }

});
}
async function getDataToFlickrPrev() {

  console.log("Flickr API");
  const urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=202018e0cbab0949eef88a5ab3d13432&tags=${getTag()}&extras=url_l&format=json&nojsoncallback=1`;
  fetch(urlFlickr)
  .then(res => {
    if(res.ok === false && res.status === 403 ||res.ok === false && res.status === 401){
      console.log('На ближайший час хватит, исчерпан лимит запросов на изображения');
      console.log('Demo apps are limited to 50 requests per hour. Learn more.');
    }
  /*   console.log(res); */
    return res.json();
  })
  .then(data => {
  /*   console.log(data); */
    if(data.photos.pages === 0){
      getTegsInput.style.border = '1px solid red' ;
    }else{
      const img = new Image();
      if(getRandoPhotoFlickr > 0){
        getRandoPhotoFlickr--;
      }else{
        getRandoPhotoFlickr = data.photos.photo.length;
      }
      img.src = data.photos.photo[getRandoPhotoFlickr].url_l;
      img.onload = () => {
        body.style.backgroundImage = `url('${data.photos.photo[getRandoPhotoFlickr].url_l}')`;
      };
      console.log(img.src);
    }
  
  });
  }

// теги для фото
function getTag() {

tegs = getTimeOfDay();

if (document.querySelector(".input__tags").value) {
tegs = document.querySelector(".input__tags").value;
}

return tegs;
}

getTegsInput.addEventListener("change", getTag);

selectApi.forEach(item =>{
  if(localStorage.getItem('resourceapi') === 'GitHub'){
    item[0].setAttribute("selected","");
    item[1].removeAttribute("selected","");
    item[2].removeAttribute("selected","");
    setBg(bgNum, timeOfDay);
  }else if(localStorage.getItem('resourceapi') === 'Unsplash API'){
    item[0].removeAttribute("selected","");
    item[1].setAttribute("selected","");
    item[2].removeAttribute("selected","");
    getTegsInput.removeAttribute('disabled');
    getDataToUnsplash();
  }else if(localStorage.getItem('resourceapi') === 'Flickr API'){
    item[0].removeAttribute("selected","");
    item[1].removeAttribute("selected","");
    item[2].setAttribute("selected","");
    getTegsInput.removeAttribute('disabled');
    getDataToFlickrNext();
  } 

});
getTegsInput.addEventListener('change', function(){
selectApi.forEach(item =>{
     if(item.value === 'Flickr API'){
      getDataToFlickrNext();
     }else if(item.value === 'Unsplash API'){
      getDataToUnsplash();
     }
});
});
};

export default getimageSlider;
    

