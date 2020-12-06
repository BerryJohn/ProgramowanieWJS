class CanvasSnow {
  constructor(canvasID) {
    this.canvasBoard = document.querySelector(canvasID);
    this.ctx = this.canvasBoard.getContext('2d');
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    //---------------------//
    this.SnowClass = new Snow();
    this.snowArr = [];
    this.frontSnowSpeed = 3;
    this.midSnowSpeed = 2;
    this.backSnowSpeed = 1.5;
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
      this.ctx.arc(el.position.x, el.position.y, el.size - 0.5, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
    });
  }

  gravity() {
    this.snowArr.forEach((e) => {
      // snow with size 2 is closer so its move faster
      if (e.size == 3) e.position.y += this.frontSnowSpeed;
      else if (e.size == 2) e.position.y += this.midSnowSpeed;
      else e.position.y += this.backSnowSpeed;
    });
    this.snowArr = this.snowArr.filter((e) => e.position.y < this.screenHeight); // remove snow below screen
  }
  draw() {
    this.clearCanvas();
    this.generateSnow();
    this.generateSnow();
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
