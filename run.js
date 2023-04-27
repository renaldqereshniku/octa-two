var zero = '0';

var one = '1';
var two = '2';
var three = '3';
var four = '4';
var five = '5';
var six = '6';
var seven = '7';
var eight = '8';

var firstNumberArray = [one];
var secondNumberArray = [one, two];
var thirdNumberArray = [one, two, three, four];
var fourthNumberArray = [one, two, three, four, five, six, seven, eight];

var firstNumber = document.getElementById('firstNumber');
var secondNumber = document.getElementById('secondNumber');
var thirdNumber = document.getElementById('thirdNumber');
var fourthNumber = document.getElementById('fourthNumber');

firstNumber.innerHTML = firstNumberArray[0];
secondNumber.innerHTML = secondNumberArray[0];
thirdNumber.innerHTML = thirdNumberArray[0];
fourthNumber.innerHTML = fourthNumberArray[0];

var startButton = document.getElementById('start-button');

var i = 0;

function step (event) {
    if (i === 0) {
        fourthNumber.innerHTML = fourthNumberArray[0];
        thirdNumber.innerHTML = thirdNumberArray[0];
        secondNumber.innerHTML = secondNumberArray[0];
        firstNumber.innerHTML = firstNumberArray[0];
        i = 1;
    }
    else if (i === 1) {
        fourthNumber.innerHTML = fourthNumberArray[1];
        thirdNumber.innerHTML = thirdNumberArray[1];
        secondNumber.innerHTML = secondNumberArray[0];
        firstNumber.innerHTML = firstNumberArray[0];
        i = 2;
    }
    else if (i === 2) {
        fourthNumber.innerHTML = fourthNumberArray[2];
        thirdNumber.innerHTML = thirdNumberArray[2];
        secondNumber.innerHTML = secondNumberArray[0];
        firstNumber.innerHTML = firstNumberArray[0];
        i = 3;
    }
    else if (i === 3) {
        fourthNumber.innerHTML = fourthNumberArray[3];
        thirdNumber.innerHTML = thirdNumberArray[3];
        secondNumber.innerHTML = secondNumberArray[0];
        firstNumber.innerHTML = firstNumberArray[0];
        i = 4;
    }
    else if (i === 4) {
        fourthNumber.innerHTML = fourthNumberArray[4];
        thirdNumber.innerHTML = thirdNumberArray[0];
        secondNumber.innerHTML = secondNumberArray[1];
        firstNumber.innerHTML = firstNumberArray[0];
        i = 5;
    }
    else if (i === 5) {
        fourthNumber.innerHTML = fourthNumberArray[5];
        thirdNumber.innerHTML = thirdNumberArray[1];
        secondNumber.innerHTML = secondNumberArray[1];
        firstNumber.innerHTML = firstNumberArray[0];
        i = 6;
    }
    else if (i === 6) {
        fourthNumber.innerHTML = fourthNumberArray[6];
        thirdNumber.innerHTML = thirdNumberArray[2];
        secondNumber.innerHTML = secondNumberArray[1];
        firstNumber.innerHTML = firstNumberArray[0];
        i = 7;
    }
    else if (i === 7) {
        fourthNumber.innerHTML = fourthNumberArray[7];
        thirdNumber.innerHTML = thirdNumberArray[3];
        secondNumber.innerHTML = secondNumberArray[1];
        firstNumber.innerHTML = firstNumberArray[0];
        i = 0;
    }
}

setInterval(step, 800);