class CanvasSnow {
  constructor(canvasID) {
    this.canvasBoard = document.querySelector(canvasID);
    this.ctx = this.canvasBoard.getContext('2d');
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    //---------------------//
    this.SnowClass = new Snow();
    this.snowArr = [];
  }
  init() {
    // default canvas style and resize
    this.ctx.canvas.width = this.screenWidth;
    this.ctx.canvas.height = this.screenHeight;
    this.ctx.fillStyle = 'hsla(257, 39%, 9%, 1)';
    this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
    this.ctx.fillStyle = 'hsla(257, 39%, 9%, 1)';
    this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
  }
  //generate sigle snow
  generateSnow() {
    const snowObj = this.SnowClass.generateSnow();
    this.snowArr.push(snowObj);
  }
  drawSnow() {
    this.snowArr.forEach((el) => {
      this.ctx.beginPath();
      this.ctx.fillStyle = 'white';
      this.ctx.arc(el.position.x, el.position.y, el.size, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
    });
  }
  gravity() {
    this.snowArr.forEach((e) => {
      e.position.y += 1;
    });
  }
  draw() {
    this.clearCanvas();
    this.generateSnow();
    this.drawSnow();
    this.gravity();
    requestAnimationFrame(() => this.draw());
  }
}
//todo:
/*
Jak snieg jest blizej to spada szybceij
jak dalej to wolnije
PERSPEKTYWA
*/
