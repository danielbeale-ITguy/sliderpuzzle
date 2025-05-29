const square = document.getElementsByClassName('square')[0];
let squareposition = 0;

square.addEventListener('click',mover)


function mover(){
    squareposition += 50;
    square.style.backgroundColor = 'blue'
    square.style.left = squareposition + 'px';

}