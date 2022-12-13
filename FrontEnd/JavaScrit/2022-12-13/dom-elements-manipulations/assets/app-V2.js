window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed', event);

	const companiesTbody = document.querySelector('#companies > tbody');
	
	document.querySelector('#company-create')?.addEventListener('click', () => {
		// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
		const tr = document.createElement('tr');

		if (Math.random() < 0.5) {
			tr.style['background-color'] = '#FF5733';
		}

		const tdCompany = document.createElement('td');

		tdCompany.textContent = document.querySelector('#company').value;

		// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
		tr.appendChild(tdCompany);

		const tdContact = document.createElement('td');

		tr.appendChild(tdContact);

		tdContact.textContent = document.querySelector('#contact').value;

		const tdCountry = document.createElement('td');

		tdCountry.textContent = document.querySelector('#country').value;

		console.log(tr, tdCountry, tdCompany, tdContact);

		// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
		tr.appendChild(tdCountry);

		companiesTbody.appendChild(tr);
	});
});