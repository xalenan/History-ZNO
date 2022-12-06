let CLASS = {
    ROOT: 'c-shutter',
    OPENED: 'c-shutter-opened',
    OPENING: 'c-shutter-opening',
    CLOSED: 'c-shutter-closed',
    CLOSING: 'c-shutter-closing',
    ITEMS: 'c-shutter__slat'
}

class Shutter {
    constructor(dom) {
        this.state = false;
        this.container = dom;
    }

    open() {
        this.state = true;
        this.toggle(true);
    }
    close() {
        this.state = false;
        this.toggle(false);
    }


    toggle(visibility) {
        this.container.classList.toggle(CLASS.OPENING, visibility);
        this.container.classList.toggle(CLASS.CLOSING, !visibility);

        setTimeout(() => {
            this.container.classList.remove(CLASS.OPENING);
            this.container.classList.remove(CLASS.CLOSING);
            this.container.classList.toggle(CLASS.OPENED, visibility);
            this.container.classList.toggle(CLASS.CLOSED, !visibility);
        }, 1999)
    }

    getState() {
        return this.state;
    }
}

const $shutter = document.querySelector('.c-shutter');

let shutter = new Shutter($shutter);

// Demo controls
let demoBtn = document.querySelector('.shutter__btn');

demoBtn.addEventListener('click', () => {
    shutter.getState() ? shutter.close() : shutter.open();
})

// Force demo click

var click = function (elem) {
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    elem.dispatchEvent(evt);
};

demoBtn.disabled = true;

setTimeout(() => {
    demoBtn.disabled = false;
    click(demoBtn);

}, 0.01);