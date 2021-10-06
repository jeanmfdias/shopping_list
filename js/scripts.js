import addItem from "./components/add.js";
import search from "./components/search.js";

const btn_add = document.querySelector('#btn_add');
const shopping_list = document.querySelector('#shopping_list');
const btn_search = document.querySelector('#btn_search');
const form = document.querySelector('#shopping_list_search');

btn_add.addEventListener('click', (event) => {
    event.preventDefault();
    addItem();
});

shopping_list.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('done');
    // if (event.target.classList.contains('done')) {
    //     event.target.classList.remove('done');
    // } else {
    //     event.target.classList.add('done');
    // }
});

btn_search.addEventListener('click', (event) => {
    event.preventDefault();

    search(form);
});