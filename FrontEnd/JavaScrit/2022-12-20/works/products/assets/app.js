// Parašykite funkciją getPosts, kuri gražina Promise, 
// kuriame yra išgaunami post'ai iš https://jsonplaceholder.typicode.com/posts 
// panaudojant vieną iš galimų AJAX būdų: XMLHttpRequest, fetch, jQuery, axios.
// 
// Užsibaigus Promise atvaizduokite gautus duomenys HTML lentelėje.
// 

function getPostsViaFetch() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
}

const postsTbody = document.querySelector('#posts > tbody');

function createTdWithText(text) {
    const td = document.createElement('td');

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
    const textNode = document.createTextNode(text);
    
    td.appendChild(textNode);

    return td;
}

getPostsViaFetch().then(data => {
    for (let post of data) {
        const tr = document.createElement('tr');
        postsTbody.appendChild(tr);

        tr.appendChild(createTdWithText(post.id));
        tr.appendChild(createTdWithText(post.title));
        tr.appendChild(createTdWithText(post.body));
        tr.appendChild(createTdWithText(post.userId));
    }
});