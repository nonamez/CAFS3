console.log(document.body);
console.log(document.body.children);
console.log(document.body.childNodes);
console.log([...document.body.childNodes].filter(e => e.nodeType == 1));

const nodes = document.body.childNodes;
let nodesFiltered = [];

for (let i in nodes) {
	if (nodes[i].nodeType == 1) {
		nodesFiltered.push(nodes[i]);
	}
}

console.log(nodesFiltered);

document.body.append(nodesFiltered[0])
document.body.append(nodesFiltered[1])
document.body.append(nodesFiltered[2])
document.body.append(nodesFiltered[3])

const testNode = nodesFiltered[0];

console.log(testNode, testNode.parentNode, testNode.parentNode.parentNode);
console.log(document, document.body, document.body.childNodes[5], document.body.childNodes[5].childNodes);