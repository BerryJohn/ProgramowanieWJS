class BallGame {
    constructor() {
        this.ballDirection = {
            x: 0, // alpha
            y: 0 // beta
        }
        this.ballPosition = {
            x: 200, // alpha
            y: 100 // beta
        }
        this.ballCanvas = new BallCanvas('#balls');
    }
    sensorsInit() {
        window.addEventListener('deviceorientation', e => {
            const moveX = Math.round(e.alpha) > 0 ? (Math.round(e.alpha) > 20 ? 20 : Math.round(e.alpha)) : (Math.round(e.alpha) < -20 ? -20 : Math.round(e.alpha));
            const moveY = Math.round(e.beta) - 90 > 0 ? (Math.round(e.beta) - 90 > 20 ? 20 : Math.round(e.beta - 90)) : Math.round(e.beta) - 90 < -20 ? -20 : Math.round(e.beta - 90);

            this.ballDirection.x = moveX;
            this.ballDirection.y = moveY;
            console.log(moveX, moveY);
        });
    }
    createMap() {
        this.ballCanvas.createCanvas();
    }
    drawPlayer() {
        this.ballCanvas.clearMap();

        this.ballPosition.x += this.ballDirection.x;
        this.ballPosition.y += this.ballDirection.y;

        this.ballCanvas.drawPlayer(this.ballPosition.x, 100 + this.ballPosition.y);

        requestAnimationFrame(() => this.drawPlayer());
    }
}