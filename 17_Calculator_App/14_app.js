// Get the HTML Elements
var firstNumberElement = document.querySelector('#firstNumber');
var secondNumberElement = document.querySelector('#secondNumber');
var operatorElement = document.querySelector('#operator');
var equalsButton = document.querySelector('#equals-button');
var resultButton = document.querySelector('#result-button');
var plusButton = document.querySelector('#plus-button');
var minusButton = document.querySelector('#minus-button');
var divButton = document.querySelector('#divide-button');
var mulButton = document.querySelector('#multiply-button');
var clearButton = document.querySelector('#clear-button');

// Event Listener for Plus Button
plusButton.addEventListener('click',function() {
    var symbol = plusButton.textContent;
    operatorElement.textContent = symbol;
});

// Event Listener for Minus Button
minusButton.addEventListener('click',function() {
    var symbol = minusButton.textContent;
    operatorElement.textContent = symbol;
});

// Event Listener for Div Button
divButton.addEventListener('click',function() {
    var symbol = divButton.textContent;
    operatorElement.textContent = symbol;
});

// Event Listener for Mul Button
mulButton.addEventListener('click',function() {
    var symbol = mulButton.textContent;
    operatorElement.textContent = symbol;
});

// Event Listener for Equals Button
equalsButton.addEventListener('click',function() {

    var firstNumber = firstNumberElement.value;
    var secondNumber = secondNumberElement.value;
    var operator = operatorElement.textContent.trim();
    var results = 0;

    if(firstNumber !== '' && secondNumber !== ''){
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(operator){
            case '+':
                results = firstNumber + secondNumber;
                break;
            case '-':
                results = firstNumber - secondNumber;
                break;
            case '*':
                results = firstNumber * secondNumber;
                break;
            case '/':
                results = firstNumber / secondNumber;
                break;
            default:
                results = 'RESULT';
                break;
        }
        resultButton.textContent = results;
    }
    else{
        resultButton.textContent = 'RESULT';
    }
});

// Event Listener for Clear Button
clearButton.addEventListener('click',function () {
   firstNumberElement.value = '';
    secondNumberElement.value = '';
    operatorElement.textContent = '+';
    resultButton.textContent = 'RESULT';
});