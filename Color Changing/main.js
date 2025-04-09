let body = document.querySelector('body');
let btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
     body.style.backgroundColor = btn.innerText;
    })
});

randBtn.addEventListener('click', () => {
    let colors = ['coral', 'cyan', 'purple', 'pink', 'lightgreen'];
    let random = Math.floor(Math.random() * colors.length);
    let randcolor = colors[random];
    body.style.backgroundColor = randcolor;
    colorPara.style.display = 'block';
    colorPara.innerText = randcolor;
});
