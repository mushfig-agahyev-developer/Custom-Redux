import './styles.css';

let state = 0;
const counter = document.getElementById('counter');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const asyncbtn = document.getElementById('async');
const themebtn = document.getElementById('theme');

function render()
{
    counter.textContent =state.toString();  
}

render();

add.addEventListener('click', ()=>{
    state++;
    render();
});

sub.addEventListener('click', ()=>{
    state--;
    render();
});

asyncbtn.addEventListener('click', ()=>{
   setTimeout(()=>{
    state++;
    render();
   },2000)
});

themebtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
});