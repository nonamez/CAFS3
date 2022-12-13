let headerElement = document.querySelector('#my-header');

function reportWindowSize(){
    headerElement.textContent = `Browser => Width: ${window.innerWidth}, Height: ${window.innerHeight}.`;
}

reportWindowSize();

window.addEventListener('resize', () =>{
    reportWindowSize();
});