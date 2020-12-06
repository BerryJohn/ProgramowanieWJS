class Snow {
  constructor(windowWidth = window.innerWidth) {
    this.windowWidth = parseInt(windowWidth);
    this.maxSize = 3.0;
    this.minSize = 0.5;
    this.size = this.random(this.maxSize, this.minSize);
    this.maxHeight = -20;
    this.minHeight = -1;
    this.maxFallSpeed = this.size;
    this.minFallSpeed = this.size / 2 + 0.5;
  }
  random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

  generateSnow() {
    return {
      x: this.random(this.windowWidth + 100, -100),
      y: this.random(this.maxHeight, this.minHeight),
      size: this.size,
      fallSpeed: this.random(this.maxFallSpeed, this.minFallSpeed),
      windPeek: 0,
    };
  }
}
