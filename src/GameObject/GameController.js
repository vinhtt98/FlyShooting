/**
 * Created by CPU60126_LOCAL on 6/3/2020.
 */

var KEYS = [];

var Objs = { //global objects
    Enemies: [{
        go: null,
        health: 15,
        speed: 15
    }],
    Bullets: [{
        go: null,
        speed: null,
        type: null
    }],
    Player: {
        go: null,
        health: 100,
        speed: 300
    }
}

var timePlayed = 0; //game time
var isAlive = false; //is the game is running

function gameStart(){//game start, hide texts
}
function gameOver(){//game over, check score
}