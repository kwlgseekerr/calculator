const numbers = document.querySelectorAll('.buttonNumber');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.buttonOperator');
const ButtonC = document.querySelector('.buttonC');
const ButtonEqual = document.querySelector('.buttonEqual');


for (let i = 0; i < numbers.length; i++){

    numbers[i].addEventListener('click', function(){
                if (display.textContent === '0') {
                    display.textContent = this.textContent;
                } else {
                    display.textContent += this.textContent;
                }
            });
}
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', function(){
        if (display.textContent === '0') {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    })
}

ButtonC.addEventListener('click', function functionReset() {
    display.innerText = "0";
});

ButtonEqual.addEventListener('click', function () {
    calculate();
});

function calculate() {
    
        display.textContent = eval(display.textContent); 
    
}