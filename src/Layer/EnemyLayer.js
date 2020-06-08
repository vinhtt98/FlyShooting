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
            Objs.EnemiesType[i] = [];
        }
        for (var i=1; i<=5; i++)
            for (var j=1; j<=4; j++) {
                Objs.EnemiesType[i][j] = 1;
                Objs.Enemies[i][j] =
                    this.addEnemy(cc.winSize.width * i/6, cc.winSize.height * 3 / 5 + 50 * j, 1);
            }

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
        for (var i=1; i<=5; i++)
            for (var j=1; j<=4; j++)
                if (!cc.sys.isObjectValid(Objs.Enemies[i][j]) && Objs.EnemiesType[i][j]<3) {
                    Objs.EnemiesType[i][j]++;
                    Objs.Enemies[i][j] =
                        this.addEnemy(cc.winSize.width * i/6, cc.winSize.height * 3 / 5 + 50 * j, Objs.EnemiesType[i][j]);
                }
    }
    ,

    checkCollision: function(){
    },

    addEnemy: function(x, y, type){//add the player to the screen
        var enemy = new Enemy(x, y, type);
        this.addChild(enemy);
        return(enemy);
    }
});