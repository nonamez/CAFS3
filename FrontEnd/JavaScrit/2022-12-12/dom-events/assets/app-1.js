console.log('app-1');

const titleH1 = document.querySelector('h1');


function inputCallback(event) {
	console.log('input #one', event.target.value);

	titleH1.textContent = event.target.value;
}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed', event);

	console.log(GREETINGS);
	
	document.querySelector('button')?.addEventListener('click', (event) => {
		console.log('button clicked', event);
	});

	document.querySelector('#stop-input')?.addEventListener('click', (event) => {
		inpt.removeEventListener('input', inputCallback);
	});

	const inpt = document.querySelector('#one');

	if (inpt) {
		inpt.addEventListener('input', inputCallback);
	}

	document.querySelector('#two')?.addEventListener('change', (event) => {
		console.log('input #two', event.target, event.target.value);
	});
});