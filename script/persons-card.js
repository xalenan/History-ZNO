let persons = [];

fetch("/db/persons.json")
    .then((res) => res.json())
    .then((list) => {
        persons = list;
        
        createPersons(list);
        
    });

const createPersons = (personsList) => {
    const elem = document.querySelector(".swiper-wrapper");
    elem.innerHTML += createElements(personsList);
};

const createElements = (personsList) => {
    let str = "";
    for (let i = 0; i < personsList.length; i++) {
        str += `<div class="persons__card item-person slider__slide swiper-slide">
                    <div class="item-person__picture">
                        <img src="${personsList[i].img}" alt="Photo" class="item-person__img">
                    </div>
                    <h4 class="item-person__title title-other">${personsList[i].name}</h4>
                    <p class="item-person__text">${personsList[i].text}</p>
                </div>
        `;
    }
    return str;
};
