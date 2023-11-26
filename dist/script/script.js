const buttonCalc = document.querySelectorAll('.tombol');
const display = document.querySelector('.tampil');

buttonCalc.forEach(button => {
    button.addEventListener('click', function () {
        if (button.innerText === 'AC') {
            display.innerText = 0;
        } else if (button.innerText === 'Del') {
            const currentCalc = display.innerText;
            display.innerText = currentCalc.slice(0, -1);
            if (display.innerText === '') {
                display.innerText = 0;
            }
        } else if (button.innerText === '/') {
            display.innerText += '/';
        } else if (button.innerText === '*') {
            display.innerText += '*';
        } else if (button.innerText === '-') {
            if (display.innerText === '0') {
                display.innerText = '-';
            } else {
                display.innerText += '-';
            }
        } else if (button.innerText === '+') {
            display.innerText += '+';
        } else if (button.innerText === '.') {
            if (!display.innerText.includes('.')) {
                display.innerText += '.';
            }
        } else if (button.innerText === '=') {
            display.innerText = eval(display.innerText);
        }
        else {
            if (display.innerText === '0') {
                display.innerText = button.innerText;
            } else {
                display.innerText += button.innerText;
            }
        }
    })
});