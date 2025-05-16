export function dropdown() {
    const menu = document.getElementById('menu-title');
    const dropdownItems = document.getElementById('dropdown-items');

    menu.addEventListener('click', () => {
        const isDropdownHidden = dropdownItems.classList.contains('hidden');

        if (!isDropdownHidden) {
            menu.classList.remove('opened');
            menu.classList.add('closed');
            dropdownItems.classList.add('hidden');
        } else {
            menu.classList.remove('closed');
            menu.classList.add('opened');
            dropdownItems.classList.remove('hidden');
        };

    });
    
};