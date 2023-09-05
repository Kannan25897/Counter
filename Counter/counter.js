const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')
const countElement = document.getElementById('count')

let count = 0;

function updatecount() {
    countElement.textContent = count;
}

decrementBtn.addEventListener('click',() => {

    count--;
    updatecount();
})

incrementBtn.addEventListener('click',() => {
    count++;
    updatecount();

})