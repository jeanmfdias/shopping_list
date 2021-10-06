const btn_add = document.querySelector('#btn_add');
const shopping_list = document.querySelector('#shopping_list');

function addItem() {
    let form = document.querySelector('#shopping_list_form');
    let shopping_list = document.querySelector('#shopping_list');
    let itemLi = document.createElement('li');

    let item = createItem(form);
    clearForm(form);
    
    itemLi.classList.add('collection-item');
    itemLi.classList.add('shopping-list-items');
    itemLi.textContent = item.value;

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

btn_add.addEventListener('click', (event) => {
    event.preventDefault();
    addItem();
});

shopping_list.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('done')) {
        event.target.classList.remove('done');
    } else {
        event.target.classList.add('done');
    }
});