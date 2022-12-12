console.log(document.body.childNodes[1].childNodes[3].childNodes[7].childNodes[3].textContent);
console.log(document.body.children[0].children[1].children[3].children[1].textContent);

const tdHelen = document.body.children[0].children[1].children[3].children[1];

console.log(tdHelen.parentNode.children[0].textContent);
// console.log(tdHelen.previousSibling);
console.log(tdHelen.previousElementSibling.textContent);

let names = [];

for (let tr of document.body.children[0].children[1].children) {
	let name = tr.children[1].textContent;

	if (name.includes('Helen')) {
		names.push(tr.children[1].textContent);
	}
}

console.log(names);

console.log([...document.body.children[0].children[1].children].map(el => el.children[2].textContent));
console.log([...document.body.children[0].children[1].children].map(el => el.children[0].textContent));

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
console.log(document.getElementById('Helen').textContent);

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName
console.log(document.getElementsByTagName('tr'));

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName
console.log(document.getElementsByName('fullname'));

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
console.log(document.getElementsByClassName('company-vip'));

console.log(document.getElementsByTagName('input'));

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

console.log(document.querySelector('tr'));
console.log(document.querySelectorAll('tr'));
console.log(document.querySelectorAll('.company-vip'));
console.log(document.querySelectorAll('[name="fullname"], input'));

document.querySelectorAll('.company-vip').forEach(el => {
	// console.log(el.parentNode.children[1].textContent);
	// console.log(el.nextSibling.nextSibling.textContent);
	console.log(el.nextElementSibling.textContent);
});

console.log([...document.querySelectorAll('.company-vip+td')].map(e => e.textContent));