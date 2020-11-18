class BallCanvas {
    constructor(canvasID) {
        this.canvasID = canvasID;
        this.canvasLoc = document.querySelector(canvasID);
        this.ctx = this.canvasLoc.getContext('2d');
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.randomHSLColor = 0;
        this.holeColor = `black`;
        this.teleportHoleColor = 'hsl(176, 97%, 37%)';
    }
    createCanvas() {
        this.ctx.canvas.width = this.screenWidth;
        this.ctx.canvas.height = this.screenHeight;
    }
    drawPlayer(x, y, radius) {
        this.ctx.beginPath();
        this.ctx.shadowColor = `hsl(326, 90%, 68%)`;
        this.ctx.shadowBlur = 10;
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = `hsl(326, 90%, 68%)`;
        // this.ctx.fillStyle = `hsl(${x-2*y}, 68%, 50%)`; // x-2*y random idea to chagne color based on X and Y
        this.ctx.fill();
    }
    clearMap() {
        this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
        this.ctx.fillStyle = 'hsl(176, 97%, 57%)';
        this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
    }
    changeColor() {
        this.randomHSLColor++;
        if (this.randomHSLColor > 1000)
            this.randomHSLColor = 0;
    }
    drawHole(x, y, radius = 50, index) {
        this.ctx.beginPath();
        if (index != 0) {
            this.ctx.shadowColor = this.holeColor;
            this.ctx.fillStyle = this.holeColor;
        } else {
            this.ctx.shadowColor = `hsl(${this.randomHSLColor}, 68%, 50%)`;
            this.ctx.fillStyle = `hsl(${this.randomHSLColor}, 68%, 50%)`;
        }
        this.ctx.shadowBlur = 15;
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.changeColor();
    }
    drawTeleportHole(x, y, radius = 50) {
        this.ctx.beginPath();
        this.ctx.shadowColor = this.teleportHoleColor;
        this.ctx.fillStyle = this.teleportHoleColor;
        this.ctx.shadowBlur = 15;
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}