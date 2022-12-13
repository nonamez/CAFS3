const trList = document.querySelectorAll('body > table > tbody > tr');

trList.forEach((element, key) => {
	if (key % 2 == 0) {
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
		element.classList.add('even');
	}
});

const trVipCompanyList = document.querySelectorAll('body > table > tbody > tr > td[data-company-type="vip"]');

for (let tr of [...trVipCompanyList]) {
	tr.style['background-color'] = '#FF5733';
}