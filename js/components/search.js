function search(form) {
    let texto = form.shopping_search.value;
    const shopping_list_items = document.querySelectorAll('.shopping-list-items');

    let regex = new RegExp(texto, 'i');

    shopping_list_items.forEach((item) => {
        item.classList.remove('invisible');
        if (!regex.test(item.innerHTML)) {
            item.classList.add('invisible');
        }
    });
}

export default search;