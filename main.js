let body = document.querySelector('body');
let btns = document.querySelectorAll('button');
let randBtn = document.querySelector('#rand-btn');
let colorPara = document.querySelector('#name');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
     body.style.backgroundColor = btn.innerText;
    })
});

randBtn.addEventListener('click', () => {
    let colors = ['pink', 'brown', 'turquoise', 'magenta', 'maroon', 'cyan', 'teal', 'gold'];
    let random = Math.floor(Math.random() * colors.length);
    let randcolor = colors[random];
    body.style.backgroundColor = randcolor;
    colorPara.style.display = 'block';
    colorPara.innerText = randcolor;
});
