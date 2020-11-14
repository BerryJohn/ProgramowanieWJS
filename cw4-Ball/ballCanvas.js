class BallCanvas {
    constructor(canvasID) {
        this.canvasID = canvasID;
        this.canvasLoc = document.querySelector(canvasID);
        this.ctx = this.canvasLoc.getContext('2d');
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
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
    drawHole(x, y, radius = 50, id) {
        this.ctx.beginPath();
        this.ctx.shadowColor = `black`;
        this.ctx.shadowBlur = 15;
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'black';
        this.ctx.fill();

        this.ctx.font = `30px Arial`;
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = "center";
        this.ctx.fillText(id, x, y + 12);
    }

}