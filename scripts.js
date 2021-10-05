const btn_add = document.querySelector('#btn_add');

function addItem() {
    let form = document.querySelector('#shopping_list_form');
    let shopping_list = document.querySelector('#shopping_list');
    let itemLi = document.createElement('li');

    let item = createItem(form);
    clearForm(form);
    
    itemLi.classList.add('collection-item');
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
})