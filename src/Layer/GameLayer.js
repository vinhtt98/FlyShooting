/**
 * Created by CPU60126_LOCAL on 6/3/2020.
 */

var GameLayer = cc.Layer.extend({//main scene

    enemyLayer: null,

    ctor:function () {
        this._super();

        this.addEnemyLayer();
        this.addPlayer();

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
        this.checkCollision();
    },

    checkCollision: function(){
        var playerBullets = this.getChildren();
        for(var i = 0; i< playerBullets.length; i++) {
            if (playerBullets[i].getTag() == 1) {
                var enemies = this.enemyLayer.getChildren();
                for(var j = 0; j< enemies.length; j++) {
                    if (enemies[j].getTag() == 0) {
                        if (cc.rectIntersectsRect(playerBullets[i].collideRect(), enemies[j].collideRect())) {
                            enemies[j].takeDamage(playerBullets[i].damage);
                            playerBullets[i].selfDestruct();
                            return;
                        }
                    }
                }
            }
        }
    },

    addPlayer: function(){//add the player to the screen
        var player = new Player();
        this.addChild(player);
        Objs.Player = player;
    },

    addEnemyLayer :function(){
        this.enemyLayer = new EnemyLayer();
        this.addChild(this.enemyLayer);
    }
});