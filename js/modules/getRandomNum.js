function getRandomNum(min, max) { //Максимум и минимум включаются
    let str = '',
        num = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
  
    num = Math.floor(Math.random() * (max - min + 1)) + min; 
    if (num < 10 && num >= 1){
      str = `0${num}`;
    }else{
      str = '' + num;
    }
    return str;
}
export default getRandomNum;