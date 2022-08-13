import './styles.css';
import { createStore } from './createStore';
import { rootReducer } from './redux/rootReducer';

let state = 0;
const counter = document.getElementById('counter');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const asyncbtn = document.getElementById('async');
const themebtn = document.getElementById('theme');

const store = createStore(rootReducer,0);

window.store = store;
add.addEventListener('click', ()=>{
console.log('step :2 - store.dispatch({type:INCREMENT})');
store.dispatch({type:'INCREMENT'})
});

sub.addEventListener('click', ()=>{
    store.dispatch({type:'DECREMENT'})
});

asyncbtn.addEventListener('click', ()=>{

});

themebtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
}); 

store.subscribe(() => {
    console.log('step :base - store.subscribe(() =>');
    const state = store.getState();
    counter.textContent = state;
});

store.dispatch({type:'INIT_APPLICATION'});