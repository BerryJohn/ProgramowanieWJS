class Snow {
  constructor(
    windowWidth = window.innerWidth,
    maxSize = 3.0,
    minSize = 1.0,
    maxHeight = -20,
    minHeight = -1
  ) {
    this.size = this.random(maxSize, minSize);
    this.x = this.random(parseInt(windowWidth) + 100, -100);
    this.y = this.random(maxHeight, minHeight);
    //
    this.maxFallSpeed = this.size;
    this.minFallSpeed = this.size / 2 + 0.5;
    this.fallSpeed = this.random(this.maxFallSpeed, this.minFallSpeed);
    this.windPeek = 0;
  }

  random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
}
