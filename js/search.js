// Navbar Search Icon

class SearchIcon {
    constructor() {
      this.searchlist = document.createElement('div');
      this.view = document.createElement('div');
      this.icons = document.querySelector('.dropdown .search');
      this.paragraph = document.querySelector('#drop-message');
    }
    init() {
      const searchIcon = `<img src="assets/icons/search.svg" alt="search-icon" />`;
      document.querySelector('.navbar').appendChild(this.searchlist);
      this.searchlist.classList.add('search-list');
      document.querySelector('.search-list').appendChild(this.view);
      this.view.classList.add('view');
      this.view.innerHTML = searchIcon;
      this.searchlist.addEventListener("click", () => {
        this.icons.classList.toggle("active-drop");
        this.paragraph.classList.toggle("active-icon");
        const message =
        `
        <p>
        <span><img src="assets/icons/search.svg" alt="search-icon" /></span>
        search
        </p>
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
        if (this.icons.className == 'search active-drop') {
          this.icons.innerHTML = message;
        }
        else {
          this.icons.innerHTML = '';
        }
      });
    }
  }
  
  const searchIcon = new SearchIcon();
  searchIcon.init();
  