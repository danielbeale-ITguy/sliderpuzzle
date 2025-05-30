const invbutton = document.getElementsByClassName('button')[8];
invbutton.style.opacity = 0.5;
const invrect = invbutton.getBoundingClientRect();


const buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i++) {
    if (i==8) continue;
    buttons[i].addEventListener('click', changeColor);

}

function changeColor(event) {
    


    
    event.target.style.position = 'absolute'
    event.target.style.backgroundColor = 'pink'
    event.target.style.left = `${invrect.left}px`;
    event.target.style.top = `${invrect.top}px`;
}









const eightOriginalPosition = {
    left: eightrect.left,
    top: eightrect.top
};

function mover () {

    eightbutton.style.position = 'absolute';
    eightbutton.style.left = `${rect.left}px`;
    eightbutton.style.top = `${rect.top}px`;

    invbutton.style.position = 'absolute';
    invbutton.style.left = `${eightOriginalPosition.left}px`;
    invbutton.style.top = `${eightOriginalPosition.top}px`;
}




