const invbutton = document.getElementsByClassName('button')[8];
invbutton.style.opacity = 0;
let invrect = invbutton.getBoundingClientRect();


const buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i++) {
    if (i==8) continue;
    buttons[i].addEventListener('click', changePos);
    
}

function changePos(event) {

    
    temprect = event.target.getBoundingClientRect();
    
    event.target.style.position = 'absolute'
    event.target.style.backgroundColor = 'pink'
    event.target.style.left = `${invrect.left}px`;
    event.target.style.top = `${invrect.top}px`;
    
    invbutton.style.position = 'absolute';
    invbutton.style.left = `${temprect.left}px`;
    invbutton.style.top = `${temprect.top}px`;

    invrect = temprect
    
}






