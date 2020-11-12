class ballCanvas {
    constructor(sizeX, sizeY, canvasID) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.canvasID = canvasID;
        this.canvasLoc = document.querySelector('#canvasID');
        this.ctx = this.canvasLoc.getContext('2d');
    }
    createCanvas() {

    }
}