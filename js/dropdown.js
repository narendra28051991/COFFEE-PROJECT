class Dropdown {
    constructor() {
      this.dropdown = document.createElement('div');
    }
    init() {
      this.dropdown.classList.add('dropdown');
      document.querySelector('body').appendChild(this.dropdown);
    }
    render() {
      const message =
        `<h4>Wonderful Copenhagen 2021</h4>
        <p>Published 12/07/2021</p>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <p>adipiscing elit. Fusce sit amet eleifend mi.</p>
        <h4>Wonderful Copenhagen 2020</h4>
        <p>Published 12/07/2020</p>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <p>adipiscing elit. Fusce sit amet eleifend mi.</p>
        <h4>Wonderful Copenhagen 2019</h4>
        <p>Published 12/07/2019</p>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <p>adipiscing elit. Fusce sit amet eleifend mi.</p>`
      this.dropdown.innerHTML += message;
      if (this.dropdown.className == 'dropdown active') {
        this.dropdown.classList.remove('active');
        this.dropdown.innerHTML = '';
      }
      else {
        this.dropdown.classList.add('active')
      }
    }
  }
  
// create dropdown
const dropdown = new Dropdown();
dropdown.init();

const button = document.querySelector('#drop-message');
button.addEventListener('click', () => {
    dropdown.render();
});