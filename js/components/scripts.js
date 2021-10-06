import addItem from "./add";

const btn_add = document.querySelector('#btn_add');
const shopping_list = document.querySelector('#shopping_list');

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
