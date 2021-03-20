/*
/*  0 = 'Apenas letras.'
/*  1 = 'Apenas números.'
/*  2 = 'Alfa-Numérico.'
/*  3 = 'Completa'
*/

function randomString(length = 10, _type = 0, caseInsensetive = false, caps = false){
    if(length <= 0 || typeof length != 'number' || length > 32) return console.error('\033[1;31mERROR: Invalid \033[4;34mlength\033[1;31m.\nThe length parameter must contain cannot be greater than 32.\033[0m')
    if(_type < 0 || typeof _type != 'number' || _type > 3) return console.error('\033[1;31mERROR: Invalid \033[4;34mtype\033[1;31m.\nThe type parameter must contain cannot be greater than 4.\033[0m')
    if(typeof caseInsensetive != 'boolean') return console.error('\033[1;31mERROR: You need to tell whether the string will contain case insensitive characters with Boolean values.(True, false)\033[0m')
    if(typeof caps != 'boolean') return console.error('\033[1;31mERROR: If the string is not case insensitive, say whether you want it to return only uppercase or lowercase letters with a Boolean value.(True, false)\033[0m')
    let characters;

    if(_type == 0 && caseInsensetive == true) characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(_type == 0 && caseInsensetive == false && caps == false) characters = 'abcdefghijklmnopqrstuvwxyz'
    if(_type == 0 && caseInsensetive == false && caps == true) characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(_type == 1) characters = '1234567890'
    if(_type == 2 && caseInsensetive == true) characters = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(_type == 2 && caseInsensetive == false && caps == false) characters = '1234567890abcdefghijklmnopqrstuvwxyz'
    if(_type == 2 && caseInsensetive == false && caps == true) characters = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(_type == 3 && caseInsensetive == true) characters = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,;-=+*&%$#@!`´^~><§'
    if(_type == 3 && caseInsensetive == false && caps == false) characters = '1234567890abcdefghijklmnopqrstuvwxyz.,;-=+*&%$#@!`´^~><§'
    if(_type == 3 && caseInsensetive == false && caps == true) characters = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ.,;-=+*&%$#@!`´^~><§'

    let result = '';

    for(let i = 0;i<length;i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return result;

}

function randomNumber(min, max, float = false){
    if(typeof float != 'boolean') return console.error('\033[1;31mERROR: You need to say whether the number will be float or not using Boolean values.(True, false)')
    if(typeof min != 'number' || typeof max != 'number') return console.error('\033[1;31mERROR: The min and max parameters must be numeric.')
    if(min >= max) return console.error('\033[1;31mERROR: The minimum value cannot be equal to or greater than the maximum value!')

    if(!float){
        return Math.floor(min + Math.random() * (max - min))
    }else{
        return min + Math.random() * (max - min)
    }
}

function toArray(string){
    if(!string || typeof string != 'string') return console.error('\033[1;31mERROR: Invalid string.\033[0m')
    let result = {
        content: string.split(/[ .,]+/gmi),
        length: string.split(/[ .,]+/gmi).length,
        input: string.replace(/[ .,]+/g, '')
    }
    return result;
}

function stringFind(string, characters){
    if(!string || typeof string !== 'string') return console.error('\033[1;31mERROR: Invalid string.([...].stringFind(>string<, character))\033[0m');
    if(!characters || typeof characters !== 'string') return console.error('\033[1;31mERROR: Invalid character string.\033[0m');
    
    let result = false;
    let regex = new RegExp(characters+'+', 'igm')
    
    if(regex.test(string)) result = true;

    return result;
}

// To miliseconds methods:

function secondInMs(value){
    if(!value || typeof value != 'number' || value <= 0) return console.error("\033[1;31mERROR: Invalid or inexistent \033[4;32mvalue\033[0m\033[1;31m parameter.\033[0m")
    let howMany = value * 1000;
    return howMany;
}

function minuteInMs(value){
    if(!value || typeof value != 'number' || value <= 0) return console.error("\033[1;31mERROR: Invalid or inexistent \033[4;32mvalue\033[0m\033[1;31m parameter.\033[0m")
    let howMany = value * 60000;
    return howMany;
}

function hourInMs(value){
    if(!value || typeof value != 'number' || value <= 0) return console.error("\033[1;31mERROR: Invalid or inexistent \033[4;32mvalue\033[0m\033[1;31m parameter.\033[0m")
    let howMany = value * minuteInMs(60);
    return howMany;
}

function dayInMs(value){
    if(!value || typeof value != 'number' || value <= 0) return console.error("\033[1;31mERROR: Invalid or inexistent \033[4;32mvalue\033[0m\033[1;31m parameter.\033[0m")
    let howMany = value * hourInMs(24);
    return howMany;
}

function weekInMs(value){
    if(!value || typeof value != 'number' || value <= 0) return console.error("\033[1;31mERROR: Invalid or inexistent \033[4;32mvalue\033[0m\033[1;31m parameter.\033[0m")
    let howMany = value * dayInMs(7);
    return howMany;
}

function monthInMs(value, monthDays = 30){
    if(!value || typeof value != 'number' || value <= 0) return console.error("\033[1;31mERROR: Invalid or inexistent \033[4;32mvalue\033[0m\033[1;31m parameter.\033[0m")
    if(monthDays < 30 || monthDays > 31) return console.error("\033[1;31mERROR: Incorrectly Usage [...].monthInMs(howMany[, monthDays]), the {monthDays} parameter must be a number betweeen 30 and 31.\033[0m")
    let howMany = value * dayInMs(monthDays);
    return howMany;
}

function yearInMs(value){
    if(!value || typeof value != 'number' || value <= 0) return console.error("\033[1;31mERROR: Invalid or inexistent \033[4;32mvalue\033[0m\033[1;31m parameter.\033[0m")
    let howMany = value * daysInMs(365);
    return howMany;
}

function time(value, _configs = 'all'){
    if(!value || typeof value != 'number' || value <= 0) return console.error("\033[1;31mERROR: Invalid or inexistent \033[4;32mvalue\033[0m\033[1;31m parameter.\033[0m")

    let configTypes;

    if(_configs == 'seconds') configTypes = ''+Math.floor(value / 1000)+' seconds';
    if(_configs == 'minutes') configTypes = ''+Math.floor(value / 60000)+' minutes';
    if(_configs == 'hours') configTypes = ''+Math.floor(value / 3600000)+' hours';
    if(_configs == 'days') configTypes = ''+Math.floor(value / 86400000)+' days';
    if(_configs == 'weeks') configTypes = ''+Math.floor(value / 604800000)+' weeks';
    if(_configs == 'month') configTypes = ''+Math.floor(value / 2592000000)+' months';
    if(_configs == 'year') configTypes = ''+Math.floor(value / 31536000000)+' years';
    if(_configs == 'all') configTypes = Math.floor(value / 31536000000)+' years, '+Math.floor(value / 2592000000)+' months, '+Math.floor(value / 604800000)+' weeks, '+Math.floor(value / 86400000)+' days, '+Math.floor(value / 3600000)+' hours, '+Math.floor(value / 60000)+' minutes, '+Math.floor(value / 1000)+' seconds';

    return configTypes;

}

module.exports = {
    randomString: randomString,
    randomNumber: randomNumber,
    toArray: toArray,
    stringFind: stringFind,
    secondInMs: secondInMs,
    minuteInMs: minuteInMs,
    hourInMs: hourInMs,
    dayInMs: dayInMs,
    weekInMs: weekInMs,
    monthInMs: monthInMs,
    yearInMs: yearInMs,
    time: time
}