// dropdown for search bar

class Dropdown {
    constructor() {
      this.dropdown = document.createElement('div');
      this.search = document.createElement('div');
      this.trigger = document.querySelector('#drop-message');
      this.wonderful = document.querySelector('#drop-message > p');
    }
    init() {
      this.dropdown.classList.add('dropdown');
      this.search.classList.add('search');
      document.querySelector('body').appendChild(this.dropdown);
      document.querySelector('.dropdown').appendChild(this.search);
      this.trigger.addEventListener('click', () => {
        this.search.classList.toggle('active-drop');
        const message =
        `
        <h4>Wonderful Copenhagen 2021</h4>
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
        <p>adipiscing elit. Fusce sit amet eleifend mi.</p>
        `
        if (this.search.className == 'search active-drop') {
          this.search.innerHTML = message;
          this.wonderful.innerHTML = 'Wonderful';
        }
        else {
          this.search.innerHTML = '';
          this.wonderful.innerHTML = 'search';
        }
      })
    }
  }
  
// create dropdown
const dropdown = new Dropdown();
dropdown.init();