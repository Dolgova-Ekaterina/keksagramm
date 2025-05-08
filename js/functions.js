function symLength(str, num) {
    if (str.length <= num) {
        return true;
    }
    return false;
}



function rightPolindrom(str) {
    let resStr = str.replaceAll(' ', '').toLowerCase();
    let newStr = '';
    for (let i = resStr.length - 1; i >= 0; i--) {
        newStr += resStr[i];

    }
    return newStr === resStr;
}




function getNumber(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let num = str[i];
        if (num >= '0' && num <= '9') {
            result += num;
        }

    }
    return result == "" ? NaN : result;
}

const timeToMinutes = (time) => {
    let [hours, minutes] = time.split(':');
    return (Number(hours) * 60) + Number(minutes);
  }
 function inTime (startDay,endDay, startMeet, longMeet) {
  
 let timeStartDay = timeToMinutes(startDay);

 let timeEndDay = timeToMinutes(endDay);
 let timeStartMeet = timeToMinutes(startMeet);
 let timeWork = timeEndDay - timeStartDay;
 let nearTime = timeStartMeet - timeStartDay;
 let upTime = timeEndDay - timeStartMeet;

 if ((nearTime < timeWork) && (upTime >= longMeet))  {
   return true;
 }
return false;
 }