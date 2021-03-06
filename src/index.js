import colors from './colors';

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

let timeout = null;

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

// генерация случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStart() {
    timeout = setInterval(() => {
		bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
	}, 1000);
    startBtn.disabled = true;
};

function onStop() {
    clearInterval(timeout);
    startBtn.disabled = false;
};