const game = new BallGame();


// setInterval(game.createMap, 1000);
game.createMap();
game.sensorsInit();
game.generateHoles(6);
game.drawGame();