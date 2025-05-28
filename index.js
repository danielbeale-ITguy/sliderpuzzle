const square = document.getElementsByClassName('square')[0];

square.addEventListener('click',mover)

function mover(){
    square.style.backgroundColor = 'blue'
    square.style.left = '50px';
}