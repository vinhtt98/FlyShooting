/**
 * Created by CPU60126_LOCAL on 6/3/2020.
 */

var GameLayer = cc.Layer.extend({//main scene

    ctor:function () {
        this._super();

        this.addEnemyLayer();
        this.addPlayer();

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame

    },

    checkCollision: function(){
    },

    addPlayer: function(){//add the player to the screen
        var player = new Player();
        this.addChild(player);
    },

    addEnemyLayer :function(){
        var enemyLayer = new EnemyLayer();
        this.addChild(enemyLayer);
    }
});