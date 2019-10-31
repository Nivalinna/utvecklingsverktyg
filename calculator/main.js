'use strict'

const prompt = require('prompt-sync')()

const run = () => {

    let number1 = prompt('Number1:')
    while (number1 < 1) {
    number1 = prompt('Number 1')     
    }
    let number2 = prompt('Number2:')
    while (number2 < 1){
    number2 = prompt('number2')
    }
    let yes = prompt('Input operator')
    while (yes < 1){
    yes = prompt('Input operator')    
    }
    let answer = null
    switch (yes) {
        case '+':
            answer = parseInt(number1) + parseInt(number2);
            console.log(number1 + '+' + number2 + '=' + answer)
            break;
        case '-':
            answer = parseInt(number1) - parseInt(number2);
            console.log(number1 + '-' + number2 + '=' + answer)
            break;
        case '*':
            answer = parseInt(number1) * parseInt(number2);
            console.log(number1 + '*' + number2 + '=' + answer)
            break;
        case '/':
            answer = parseInt(number1) / parseInt(number2);
            console.log(number1 + '/' + number2 + '=' + answer)
            break;
        default:
            console.log('Mee pois')
    }    
    if (answer !==null){
    console.log(answer)
    }
}

run()