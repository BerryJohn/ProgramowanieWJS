class CanvasSnow {
  constructor(canvasID) {
    this.canvasBoard = document.querySelector(canvasID);
    this.ctx = this.canvasBoard.getContext('2d');
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    //---------------------//
  }
  init() {
    // default canvas style and resize
    this.ctx.canvas.width = this.screenWidth;
    this.ctx.canvas.height = this.screenHeight;
    this.ctx.fillStyle = 'hsla(257, 39%, 9%, 1)';
    this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
  }
}
