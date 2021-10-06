import btnRemove from "./remove.js";

function addItem() {
    let form = document.querySelector('#shopping_list_form');
    let shopping_list = document.querySelector('#shopping_list');
    let itemLi = document.createElement('li');

    let item = createItem(form);
    clearForm(form);
    
    itemLi.classList.add('collection-item');
    itemLi.classList.add('shopping-list-items');
    itemLi.textContent = item.value;
    itemLi.appendChild(btnRemove());

    shopping_list.appendChild(itemLi);
}

function createItem(form) {
    let value = form.shopping_item.value;
    let item = {
        value: value
    };

    return item;
}

function clearForm(form) {
    form.shopping_item.value = '';
}

export default addItem;