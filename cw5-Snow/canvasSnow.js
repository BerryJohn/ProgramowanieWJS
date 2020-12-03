class Snow {
  constructor(windowWidth = window.innerWidth) {
    this.windowWidth = parseInt(windowWidth);
    this.maxSize = 30;
    this.minSize = 5;
    this.snowObj = {};
  }
  randomSize = () =>
    Math.floor(Math.random() * (this.maxSize - this.minSize + 1)) +
    this.minSize;

  randomWidth = () => Math.floor(Math.random() * (this.windowWidth + 1));

  generateSnow() {
    return (this.snowObj = {
      position: {
        x: this.randomWidth(),
        y: -10,
      },
      size: this.randomSize(),
    });
  }
}
