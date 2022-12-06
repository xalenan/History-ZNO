const btns = document.querySelectorAll('.accordion__btn');
const lists = document.querySelectorAll('.accordion__content');

btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        btns.forEach((btnItem) => {
            btnItem.classList.remove('accordion__btn-active');
        })
        btnItem.classList.add('accordion__btn-active');

        lists.forEach((listItem) => {
            listItem.classList.add('hidden');
        })
        lists[index].classList.remove('hidden');
    })
})