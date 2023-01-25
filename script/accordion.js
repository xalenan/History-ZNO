const btns = document.querySelectorAll('.accordion__btn');              
const itemAcc = document.querySelectorAll('.accordion__item');         
const lists = document.querySelectorAll('.accordion__content');         
const arrowIcon = document.querySelectorAll('.accordion-item__icon');  


btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        itemAcc.forEach((item) => {
            item.classList.remove('accordion__item-active');         
        })
        itemAcc[index].classList.add('accordion__item-active');     

        arrowIcon.forEach((arrowIconItem) => {
            arrowIconItem.src = 'assets/icons/arrow-close.svg';     
        })
        arrowIcon[index].src = 'assets/icons/arrow-open.svg';       
       
        if (lists[index].style.maxHeight) {
            lists.forEach((el) => el.style.maxHeight = null);
            arrowIcon[index].src = 'assets/icons/arrow-close.svg';               
        } else {
            lists.forEach((el) => el.style.maxHeight = null);
            lists[index].style.maxHeight = lists[index].scrollHeight + "px";
        }         
    })
})
