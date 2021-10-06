const btn_search = document.querySelector('#btn_search');
const form = document.querySelector('#shopping_list_search');

btn_search.addEventListener('click', (event) => {
    event.preventDefault();

    let texto = form.shopping_search.value;
    const shopping_list_items = document.querySelectorAll('.shopping-list-items');

    let regex = new RegExp(texto, 'i');

    shopping_list_items.forEach((item) => {
        item.classList.remove('invisible');
        if (!regex.test(item.innerHTML)) {
            item.classList.add('invisible');
        }
    });
});