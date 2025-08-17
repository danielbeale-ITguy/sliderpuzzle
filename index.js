const invbutton = document.getElementsByClassName('button')[8];
invbutton.style.opacity = 0;
let invrect = invbutton.getBoundingClientRect();


const buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i++) {
    if (i==8) continue;
    buttons[i].addEventListener('click', changePos);
    buttons[i].addEventListener('click', do_something);
}











function changePos(event) {
    
        temprect = event.target.getBoundingClientRect();
        let invrectX = (invrect.left + invrect.right) / 2;
        let invrectY = (invrect.top + invrect.bottom) /2; 
        let temprectX = (temprect.left + temprect.right) / 2;
        let temprectY = (temprect.top + temprect.bottom) / 2;
        let distance = invrectY - temprectY;
        let distanceX = invrectX - temprectX;
        
        if (invrectX == temprectX && (distance == 50 || distance == -50)){
        

            
        
            event.target.style.position = 'absolute'
            event.target.style.backgroundColor = 'pink'
            event.target.style.left = `${invrect.left}px`;
            event.target.style.top = `${invrect.top}px`;
            
            invbutton.style.position = 'absolute';
            invbutton.style.left = `${temprect.left}px`;
            invbutton.style.top = `${temprect.top}px`;
            
            invrect = temprect}
        
        else if (invrectY == temprectY && (distanceX == 50 || distanceX == -50)){
                event.target.style.position = 'absolute'
                event.target.style.backgroundColor = 'pink'
                event.target.style.left = `${invrect.left}px`;
                event.target.style.top = `${invrect.top}px`;
                
                invbutton.style.position = 'absolute';
                invbutton.style.left = `${temprect.left}px`;
                invbutton.style.top = `${temprect.top}px`;

                invrect = temprect
            }





}

let count = 0

function do_something() {
    count += 1; 
    document.getElementById('count').innerHTML = count;
    
}


