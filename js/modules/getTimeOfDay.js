const getTimeOfDay = ()=> {
    const date = new Date(),
          hours = date.getHours();
    if(hours >= 6 && hours < 12){
        return 'morning';
      }else if (hours >= 12 && hours < 18){
        return 'afternoon';
      }else if (hours >= 18 && hours <= 23){
        return 'evening';
      }else if (hours >= 0 && hours < 6){
        return 'night';
    }
};
export default getTimeOfDay;