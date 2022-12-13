window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed', event);

	// document.querySelector('form')?.addEventListener('submit', (event) => {
	// 	// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
	// 	// https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation
	// 	// https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
	// 	event.preventDefault();

	// 	console.log('form submit');
	// });
	
	const companiesTbody = document.querySelector('#companies > tbody');
	
	document.querySelector('#company-create')?.addEventListener('click', () => {
		const strHtml = `
			<tr>
				<td>${document.querySelector('#company').value}</td>
				<td>${document.querySelector('#contact').value}</td>
				<td>${document.querySelector('#country').value}</td>
			</tr>
		`;

		console.log(strHtml);

		companiesTbody.innerHTML += strHtml;
	});
});