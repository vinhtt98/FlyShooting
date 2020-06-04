/**
 * Created by CPU60126_LOCAL on 6/4/2020.
 */

var EnemyLayer = cc.LayerColor.extend({

    ctor:function () {
        this._super();

        //this.setColor(cc.color.BLUE);
        //this.setPosition(0, cc.winSize.height * 3 / 5);

        for ( var i = 0; i < 6; i++ ) {
            Objs.Enemies[i] = [];
        }
        for (var i=1; i<=5; i++)
            for (var j=1; j<=4; j++) {
                var enemy = Objs.Enemies[i][j] =
                    this.addEnemy(cc.winSize.width * i/6, cc.winSize.height * 3 / 5 + 50 * j);
            }

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
    },

    checkCollision: function(){
    },

    addEnemy: function(x, y){//add the player to the screen
        var enemy = new Enemy(x, y);
        this.addChild(enemy);
        return(enemy);
    }
});