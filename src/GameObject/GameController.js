/**
 * Created by CPU60126_LOCAL on 6/3/2020.
 */

var KEYS = [];

var Objs = { //global objects
    Enemies: [{
        go: null,
        health: 15,
        speed: 500,
        atkRate: 0.25
    }],
    Player: {
        go: null,
        health: 100,
        speed: 500,
        atkRate: 0.25
    },
    enemyBullets: [],
    playerBullets: [],
    bulletSpeed: 1500
}

var timePlayed = 0; //game time
var isAlive = false; //is the game is running

function gameStart(){//game start, hide texts
}
function gameOver(){//game over, check score
}