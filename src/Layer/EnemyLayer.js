/**
 * Created by CPU60126_LOCAL on 6/4/2020.
 */

var EnemyLayer = cc.LayerColor.extend({

    ctor:function () {
        this._super();

        this.setColor(cc.color.WHITE);
        this.setPosition(0, cc.winSize.height / 2)

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame

    },

    checkCollision: function(){
    },

    addEnemy: function(x, y){//add the player to the screen
    },
});