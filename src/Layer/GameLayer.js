/**
 * Created by CPU60126_LOCAL on 6/3/2020.
 */

var GameLayer = cc.Layer.extend({//main scene

    enemyLayer: null,

    enemies: null,

    ctor:function () {
        this._super();

        this.addEnemyLayer();
        this.addPlayer();
        this.addUILayer();

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
        this.checkCollision();
        this.enemies = this.enemyLayer.getChildren();
    },

    checkCollision: function(){
        //var bullets = this.getChildren();
        //for(var i = 0; i< bullets.length; i++) {
        //    if (bullets[i].getTag() == 1) {
        //        var enemies = this.enemyLayer.getChildren();
        //        for(var j = 0; j< enemies.length; j++) {
        //            if (enemies[j].getTag() == 0) {
        //                if (cc.rectIntersectsRect(bullets[i].collideRect(), enemies[j].collideRect())) {
        //                    enemies[j].takeDamage(bullets[i].damage);
        //                    bullets[i].selfDestruct();
        //                    return;
        //                }
        //            }
        //        }
        //    }
        //    else if (bullets[i].getTag() == 2) {
        //        var player = Objs.Player;
        //        if (cc.rectIntersectsRect(bullets[i].collideRect(), player.collideRect())) {
        //            player.takeDamage(bullets[i].damage);
        //            bullets[i].selfDestruct();
        //            return;
        //        }
        //    }
        //}
    },

    addPlayer: function(){//add the player to the screen
        var player = new Player();
        this.addChild(player);
        Objs.Player = player;
    },

    addEnemyLayer :function(){
        this.enemyLayer = new EnemyLayer();
        this.addChild(this.enemyLayer);
    },

    addUILayer :function(){
        var uiLayer = new UILayer();
        this.addChild(uiLayer);
    }
});