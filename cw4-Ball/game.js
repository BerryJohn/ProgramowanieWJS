class BallGame {
    constructor() {
        this.ballDirection = {
            x: 0, // alpha
            y: 0 // beta
        }
    }
    sensorsInit() {
        window.addEventListener('deviceorientation', e => {
            this.ballDirection.x = Math.round(e.alpha);
            this.ballDirection.y = Math.round(e.beta);
            console.log(this.ballDirection);
        });
    }
}