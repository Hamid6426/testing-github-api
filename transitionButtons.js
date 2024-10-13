const changeColorBtn = document.getElementById('change-color-btn-1');

let currentColor = 'white';
const nextColor = 'blue';

changeColorBtn.addEventListener('click', () => {
    currentColor === 'white' ? 
        document.body.style.backgroundColor = nextColor : 
        document.body.style.backgroundColor = currentColor = 'white';
});

const changeColorBtn = document.getElementById('change-color-btn-2');

const colors = ['white', 'blue', 'red', 'green'];
let colorIndex = 0;

changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});
