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