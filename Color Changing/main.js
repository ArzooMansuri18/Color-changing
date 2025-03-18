let body = document.querySelector('body');
let btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
     body.style.backgroundColor = btn.innerText;
    })
});
