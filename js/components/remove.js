function btnRemove() {
    let btn_remove = document.createElement('button')
    let icon_trash = document.createElement('i');

    btn_remove.classList.add('btn-small');
    btn_remove.classList.add('waves-effect');
    btn_remove.classList.add('waves-light');
    btn_remove.classList.add('btn-remove');
    btn_remove.classList.add('right')
    icon_trash.classList.add('material-icons');
    icon_trash.textContent = 'delete_forever';
    btn_remove.appendChild(icon_trash);

    btn_remove.addEventListener('click', (event) => {
        event.target.closest('li').remove();
    });

    return btn_remove;
}

export default btnRemove;
