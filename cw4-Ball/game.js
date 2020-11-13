class BallGame {
    constructor() {
        this.ballDirection = {
            x: 0, // alpha
            y: 0 // beta
        }
        this.ballPosition = {
            x: 50, // alpha
            y: 50 // beta
        }
        this.ballCanvas = new BallCanvas('#balls');
        this.playerRadius = 30;
        this.screenWidth = window.innerWidth - 200;
        this.screenHeight = window.innerHeight - 100;
        this.allHoles = [];
    }
    sensorsInit() {
        window.addEventListener('deviceorientation', e => {
            const maxMove = 5;
            const minMove = -5;
            const moveX = Math.round(e.alpha) > 0 ? (Math.round(e.alpha) > maxMove ? maxMove : Math.round(e.alpha)) : (Math.round(e.alpha) < minMove ? minMove : Math.round(e.alpha));
            const moveY = Math.round(e.beta) - 90 > 0 ? (Math.round(e.beta) - 90 > maxMove ? maxMove : Math.round(e.beta - 90)) : Math.round(e.beta) - 90 < minMove ? minMove : Math.round(e.beta - 90);

            this.ballDirection.x = moveX;
            this.ballDirection.y = moveY;
        });
    }
    createMap() {
        this.ballCanvas.createCanvas();
    }
    drawPlayer() {
        this.ballCanvas.clearMap();

        this.ballPosition.x += this.ballDirection.x;
        this.ballPosition.y += this.ballDirection.y;

        this.checkBorders(this.ballPosition.x, this.ballPosition.y)

        this.ballCanvas.drawPlayer(this.ballPosition.x, this.ballPosition.y, this.playerRadius);
    }
    checkBorders(x, y) {
        if (x < this.playerRadius) // too much on left
            this.ballPosition.x = this.playerRadius;
        if (y < this.playerRadius) // too much on top
            this.ballPosition.y = this.playerRadius;
        if (x > this.screenWidth - this.playerRadius) // too much on right
            this.ballPosition.x = this.screenWidth - this.playerRadius;
        if (y > this.screenHeight - this.playerRadius) // too much on down
            this.ballPosition.y = this.screenHeight - this.playerRadius;
    }
    drawHole() {
        this.allHoles.forEach(hole => {
            this.ballCanvas.drawHole(hole.x, hole.y);
        })
    }

    randomPoint(holeRadius) {
        const maxWidth = this.screenWidth - holeRadius;
        const maxHeight = this.screenHeight - holeRadius;
        const randomX = Math.floor(Math.random() * (maxWidth - holeRadius)) + holeRadius;
        const randomY = Math.floor(Math.random() * (maxHeight - holeRadius)) + holeRadius;
        return {
            x: randomX,
            y: randomY
        }
    }

    generateHoles(amount, radius = 50) {
        for (let i = 0; i < amount; i++) {
            const positions = this.randomPoint(radius);
            const hole = {
                x: positions.x,
                y: positions.y
            }
            this.allHoles.push(hole);
        }
    }

    drawGame() {
        this.drawPlayer();
        this.drawHole();
        requestAnimationFrame(() => this.drawGame());
    }
}