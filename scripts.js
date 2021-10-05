const shopping_list = document.querySelector('#shopping_list');
const shopping_item = document.querySelector('#shopping_item');
const btn_add = document.querySelector('#btn_add');

function addItem() {
    let value = shopping_item.value;
    let itemLi = document.createElement('li');
    
    shopping_item.value = '';
    itemLi.classList.add('collection-item');
    itemLi.textContent = value;

    shopping_list.appendChild(itemLi);
}

btn_add.addEventListener('click', (event) => {
    event.preventDefault();
    addItem();
})