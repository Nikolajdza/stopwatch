'use script';

let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');
let time = document.getElementById('time');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

let options = document.querySelector('.buttons');
options.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.id === 'start-btn') {
		start();
	} else if (e.target.id === 'stop-btn') {
		stop();
	} else if (e.target.id === 'reset-btn') {
		reset();
	}
});

function start() {
	interval = setInterval(update, 10);
}

function stop() {
	clearInterval(interval);
}

function reset() {
	time.textContent = '00:00:00';
	seconds = 0;
	minutes = 0;
	hours = 0;
	stop();
}

function update() {
	seconds++;
	if (seconds / 60 === 1) {
		seconds = 0;
		minutes++;
		if (minutes / 60 === 1) {
			minutes = 0;
			hours++;
		}
	}
	time.textContent = getTimeString(hours, minutes, seconds);
	// time.textContent = `${hours < 10 ? '0' + hours : hours}:${
	// 	minutes < 10 ? '0' + minutes : minutes
	// }:${seconds < 10 ? '0' + seconds : seconds}`;
}

function getTimeString(h, m, s) {
	let hString = h < 10 ? '0' + h : h;
	let mString = m < 10 ? '0' + m : m;
	let sString = s < 10 ? '0' + s : s;
	return hString + ':' + mString + ':' + sString;
}
