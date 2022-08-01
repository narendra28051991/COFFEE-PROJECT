// Responsive Navbar

class Mobile {
  constructor() {
    this.menu = document.createElement('div');
    this.trigger = document.createElement('div');
    this.icons = document.querySelector('.right')
  }
  init() {
    const toggleIcon = `<img src="assets/icons/burger-menu.svg" alt="toggle-icon" />`;
    document.querySelector('.navbar').appendChild(this.menu);
    this.menu.classList.add('menu');
    document.querySelector('.menu').appendChild(this.trigger);
    this.menu.classList.add('trigger');
    this.menu.innerHTML = toggleIcon;
    this.menu.addEventListener("click", () => {
      this.icons.classList.toggle("active-nav");
    });
  }
}

const mobile = new Mobile();
mobile.init();
