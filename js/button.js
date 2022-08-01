// click event for the div in the left side

class Button {
    constructor() {
      this.first = document.querySelector('.left-side div:nth-child(1) .image');
      this.second = document.querySelector('.left-side div:nth-child(2) .image');
      this.third = document.querySelector('.left-side div:nth-child(3) .image');
      this.fourth = document.querySelector('.left-side div:nth-child(4) .image');
      this.select = document.querySelector('.select');
    }
    init() {
      const first = `<img src="assets/images/posts/Post thumbnail-3.png" alt="post-image" />`
      const second = `<img src="assets/images/posts/Post thumbnail-4.png" alt="post-image" />`
      const third = `<img src="assets/images/posts/Post thumbnail-1.png" alt="post-image" />`
      const fourth = `<img src="assets/images/posts/Post thumbnail-2.png" alt="post-image" />`
      this.select.addEventListener("click", () => {
        this.first.innerHTML = first;
        this.second.innerHTML = second;
        this.third.innerHTML = third;
        this.fourth.innerHTML = fourth;
      });
    }
  }
  
  const button = new Button();
  button.init();
  