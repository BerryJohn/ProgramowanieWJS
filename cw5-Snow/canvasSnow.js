class Snow {
  constructor(windowWidth = window.innerWidth) {
    this.windowWidth = parseInt(windowWidth);
    this.maxSize = 3;
    this.minSize = 1;
    this.maxHeight = -20;
    this.minHeight = -1;
    this.snowObj = {};
  }
  randomSize = () =>
    Math.floor(Math.random() * (this.maxSize - this.minSize + 1)) +
    this.minSize;

  randomWidth = () => Math.floor(Math.random() * (this.windowWidth + 1));

  randomHeight = () =>
    Math.floor(Math.random() * (this.maxHeight - this.minHeight + 1)) +
    this.minHeight;

  generateSnow() {
    return (this.snowObj = {
      position: {
        x: this.randomWidth(),
        y: this.randomHeight(),
      },
      size: this.randomSize(),
    });
  }
}
