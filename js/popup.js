class Popup {
    constructor() {
        this.popup = document.createElement('div');
        this.popup.setAttribute('id', 'show-popup');
    }
    init() {
        this.popup.classList.add('popup');
        document.querySelector('body').appendChild(this.popup);
    }
    render () {
        this.popup.innerHTML = '';
        const widget = `<img src="assets/images/posts/Post thumbnail-1.png" alt="full-image" >`
        this.popup.innerHTML += widget;
        this.popup.classList.add('show');
    }
}

const popup = new Popup()
popup.init()

// Adding the click event for home page
const homePage = document.querySelector('body > div.home > div.left-side');
homePage.addEventListener('click', () => {
    document.querySelector('body').innerHTML = '';
    popup.init();
    popup.render();
});

// Adding the click event for popup page
const newPage = document.getElementById('show-popup');
newPage.addEventListener('click', () => {
    newPage.remove();
    document.location.reload();
});