class BallCanvas {
    constructor(canvasID) {
        this.canvasID = canvasID;
        this.canvasLoc = document.querySelector(canvasID);
        this.ctx = this.canvasLoc.getContext('2d');
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }
    createCanvas() {
        this.ctx.canvas.width = this.screenWidth - 200;
        this.ctx.canvas.height = this.screenHeight - 100;
    }
    drawPlayer(x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 50, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
    clearMap() {
        this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
    }
}