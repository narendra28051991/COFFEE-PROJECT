// Pop up page 

class Popup {
    constructor() {
        this.popup = document.createElement('div');
        this.background = document.createElement('div');
        this.image = document.createElement('div');
        this.text = document.createElement('div');
        this.dropdown = document.querySelector('.dropdown');
        document.querySelector('body').appendChild(this.popup);
        this.popup.classList.add('popup');
        document.querySelector('.popup').appendChild(this.background);
        this.background.classList.add('background');
        document.querySelector('.background').appendChild(this.image);
        this.image.classList.add('popup-image');
        document.querySelector('.background').appendChild(this.text);
        this.text.classList.add('popup-text');
        this.loadpage = document.querySelector('.popup');
        this.one = document.querySelector('.home .left-side div:nth-child(1)');
        this.two = document.querySelector('.home .left-side div:nth-child(2)');
        this.three = document.querySelector('.home .left-side div:nth-child(3)');
    }
    init() {
        this.image.innerHTML = `<img src="assets/images/slider/image-1.jpg" alt="wide-image" />`;
        this.text.innerHTML =
        `
        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
        <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
        `;
        this.dropdown.addEventListener('click', () => {
            this.popup.classList.add('active-popup');
        });
        this.one.addEventListener('click', () => {
            this.popup.classList.add('active-popup');
        });
        this.two.addEventListener('click', () => {
            this.popup.classList.add('active-popup');
        });
        this.three.addEventListener('click', () => {
            this.popup.classList.add('active-popup');
        });
    }
    render() {
        this.loadpage.addEventListener('click', () => {
            this.popup.classList.remove('active-popup');
        });
    }
}

const popup = new Popup()
popup.init();
popup.render();