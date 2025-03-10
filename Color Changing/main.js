let body = document.querySelector('body');
let btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.innerText === "Red") {
        body.style.backgroundColor = "red";

        } else if (btn.innerText === "Orange") {
        body.style.backgroundColor = "orange";

        } else if (btn.innerText === "Yellow") {
        body.style.backgroundColor = "yellow"; 

        } else if (btn.innerText === "Green") {
        body.style.backgroundColor = "green"; 
          
        } else if (btn.innerText === "Blue") {
        body.style.backgroundColor = "blue";
            
        } else if (btn.innerText === "Indigo") {
        body.style.backgroundColor = "indigo";
            
        } else if (btn.innerText === "Violet") {
        body.style.backgroundColor = "violet";  
        };
    })
});
