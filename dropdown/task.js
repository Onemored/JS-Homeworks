document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        const buttonRect = valueElement.getBoundingClientRect();
        
        list.style.left = buttonRect.left + 'px';

        valueElement.addEventListener('click', () => {
            list.classList.toggle('dropdown__list_active');
        });

        items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedText = item.querySelector('.dropdown__link').textContent.trim();
                valueElement.textContent = selectedText;
                list.classList.remove('dropdown__list_active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                list.classList.remove('dropdown__list_active');
            }
        });
    });
});
