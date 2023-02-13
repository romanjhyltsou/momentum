const audioPlayer = () => {
    let nowPlaying = document.querySelector('.now-playing'),
        nowPlayingX = document.querySelector('.now-num-x'),
        nowPlayingY = document.querySelector('.now-num-y'),
        trackArt = document.querySelector('.track-art'),
        trackName = document.querySelector('.track-name'),
        trackArtist = document.querySelector('.track-artist'),

        repeatTr = document.querySelector('.repeat-track'),
        randomTr = document.querySelector('.random-track'),

        playpauseBtn = document.querySelector('.playpause-track'),
        nextBtn = document.querySelector('.next-track'),
        prevBtn = document.querySelector('.prev-track'),

        seekSlider = document.querySelector('.seek_slider'),
        currTime = document.querySelector('.current-time'),
        totalDuration = document.querySelector('.total-duration'),

        volumeSlider = document.querySelector('.volume_slider'),
       /*  wave = document.getElementById('wave'), */
        randomIcon = document.querySelector('.fa-random'),
        currTrack = document.createElement('audio'),

        faVlumeDown = document.querySelector('.fa-volume-down'),
        faVolumeUp = document.querySelector('.fa-volume-up'),

        trackIndex = 0,
        isPlaying = false,
        isRandom = false,
        updateTimer;

    const musicList = [
    {
        img : 'images/stay.png',
        name : 'Stay',
        artist : 'Justin Bieber',
        music : 'music/stay.mp3'
    },
    {
        img : 'images/fallingdown.jpg',
        name : 'Falling Down',
        artist : 'Wid Cards',
        music : 'music/fallingdown.mp3'
    },
    {
        img : 'images/faded.png',
        name : 'Faded',
        artist : 'Alan Walker',
        music : 'music/Faded.mp3'
    },
    {
        img : 'images/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : 'music/Rather Be.mp3'
    }
];

// СПИСОК 
let itemList;

for(let i = 0; i < musicList.length; i++ ){

   itemList = document.createElement('div');
   itemList.className = 'item-list'; 

   document.querySelector('.audio-list').append(itemList);


   itemList.display = 'flex';
   itemList.style.textAlign = 'initial';
   itemList.style.marginLeft = '20px';
   itemList.style.marginBottom = '10px';
   itemList.innerHTML = `<i class="fa fa-play-circle fa-1x"></i> ${musicList[i].name}`;
}

function colorList(){
    for(let i = 0; i < itemLists.length; i++ ){
        itemLists[i].style.color = '#fff';
    }
        
}

function playList(){
    for(let i = 0; i < itemLists.length; i++ ){
        itemLists[i].innerHTML = `<i class="fa fa-play-circle fa-1x"></i> ${musicList[i].name}`;
    }
}

let itemLists  = document.querySelectorAll('.item-list');

for(let i = 0; i < itemLists.length; i++ ){
    
itemLists[i].addEventListener('click', (e)=> {
    if(/* e.target.matches('.item-list') ||  */e.target.matches('.fa-play-circle')){
        loadTrack(i, itemLists);
        colorList();
        itemLists[i].style.color = '#f2fa9b';
        currTrack.play();
        playList();
        trackIndex = i;
        isPlaying = true;
        itemLists[i].innerHTML = `<i class="fa fa-pause-circle pause-list fa-1x"></i> ${musicList[i].name}`;
        playpauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-4x"></i>';
       
    }
});

itemLists[i].addEventListener('click', (e)=> {

    if(e.target.matches('.pause-list')){
        playList();
        playpauseBtn.innerHTML = '<i class="fa fa-play-circle fa-4x"></i>';
        pauseTrack();
    }
});

}


// СПИСОК 

loadTrack(trackIndex , itemLists);

function loadTrack(trackIndex, itemLists){
    clearInterval(updateTimer); // обновляем таймер при вызове функц loadTrack
    reset(); // сбрасываем время на 00 и полное время на 00

    currTrack.src = musicList[trackIndex].music;
    currTrack.load();
    
    trackArt.style.backgroundImage = "url(" + musicList[trackIndex].img + ")";
    trackName.textContent = musicList[trackIndex].name;
    trackArtist.textContent = musicList[trackIndex].artist;
    nowPlayingX.textContent = trackIndex + 1;
    nowPlayingY.textContent = musicList.length;

    colorList();
    itemLists[trackIndex].style.color = '#f2fa9b';
    
        updateTimer = setInterval(setUpdate, 1000); // обновляем таймер каждую сек

        currTrack.addEventListener('ended', nextTrack); 
        // когда закончился звук у currTrack, вызываем функцию nextTrack

    randomBgColor();
    // вызываем функцию с рандомным бэкграундом
}
function randomBgColor(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    //создаём массив hex
    let a;
    function populate(a){  //получаем рандомный цвет в hex
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
   
    let Color1 = populate('#'),
        Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    /* document.querySelector('.wrapper').style.background = gradient; // меняем фон */
    document.querySelector('.wrapper').style.background = "rgba(255, 255, 255, 0.04)";
}

function reset(){
    currTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    seekSlider.value = 0;
}

//рандом трек
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');

}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
randomTr.addEventListener('click', randomTrack);
//рандом трек end

function repeatTrack(){
    let currentIndex = trackIndex;
    loadTrack(currentIndex, itemLists);
    playTrack();
    playList();
    itemLists[trackIndex].innerHTML = `<i class="fa fa-pause-circle fa-1x"></i> ${musicList[trackIndex].name}`;
}
repeatTr.addEventListener('click', repeatTrack);

//запуск трека
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}


playpauseBtn.addEventListener('click', playpauseTrack);

function playTrack(){
    currTrack.play();
    isPlaying = true;
    trackArt.classList.add('rotate');
   // wave.classList.add('loader');  // эффект 
    playpauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-4x"></i>';

    playList();
    itemLists[trackIndex].innerHTML = `<i class="fa fa-pause-circle pause-list fa-1x"></i> ${musicList[trackIndex].name}`;
}

function pauseTrack(){
    currTrack.pause();
    isPlaying = false;
    trackArt.classList.remove('rotate');
   // wave.classList.remove('loader'); // эффект 
    playpauseBtn.innerHTML = '<i class="fa fa-play-circle fa-4x"></i>';

    
    itemLists[trackIndex].innerHTML = `<i class="fa fa-play-circle fa-1x"></i> ${musicList[trackIndex].name}`;
    playList();
    
}
//запуск трека end

//переключатили трека 
function nextTrack(){
    if(trackIndex < musicList.length - 1 && isRandom === false){
        trackIndex += 1;
    }else if(trackIndex < musicList.length - 1 && isRandom === true){
        let randomIndex = Number.parseInt(Math.random() * musicList.length);
        trackIndex = randomIndex;
    }else{
        trackIndex = 0;
    }
    loadTrack(trackIndex , itemLists);
    playTrack();
    playList();
    itemLists[trackIndex].innerHTML = `<i class="fa fa-pause-circle pause-list fa-1x"></i> ${musicList[trackIndex].name}`;
}
nextBtn.addEventListener('click', nextTrack);

function prevTrack(){
    if(trackIndex > 0){
        trackIndex -= 1;
    }else{
        trackIndex = musicList.length -1;
    }
    loadTrack(trackIndex, itemLists);
    playTrack();
    playList();
    itemLists[trackIndex].innerHTML = `<i class="fa fa-pause-circle pause-list fa-1x"></i> ${musicList[trackIndex].name}`;
}
prevBtn.addEventListener('click', prevTrack);
//переключатили трека end

// ползунок перемотки 
function seekTo(){
    let seekto = currTrack.duration * (seekSlider.value / 100);
    currTrack.currentTime = seekto;
}
seekSlider.addEventListener('change', seekTo);
// ползунок перемотки end

// громкость звука


function setVolume(){
    currTrack.volume = volumeSlider.value / 100;
}
volumeSlider.addEventListener('mousemove', setVolume);




function volumeTurnOff(){
    currTrack.volume = 0;
    volumeSlider.value = 0;
}
function volumeTurnOn(){
    currTrack.volume = '0.99';
    volumeSlider.value = '100';
}

faVolumeUp.addEventListener('click', volumeTurnOn);
faVlumeDown.addEventListener('click', volumeTurnOff);
// громкость звука


function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(currTrack.duration)){
        seekPosition = currTrack.currentTime * (100 / currTrack.duration);
        seekSlider.value = seekPosition;

        let currentMinutes = Math.floor(currTrack.currentTime / 60);
        let currentSeconds = Math.floor(currTrack.currentTime - currentMinutes * 60);

        let durationMinutes = Math.floor(currTrack.duration / 60);
        let durationSeconds = Math.floor(currTrack.duration - durationMinutes * 60);


        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        currTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDuration.textContent = durationMinutes + ":" + durationSeconds;

    }
}


};
export default audioPlayer;