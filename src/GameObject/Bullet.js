/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

var Bullet = cc.Sprite.extend({//main scene

    ctor:function (go) {
        this._super(res.box_png);

        if (go === Objs.Player.go) {
            this.setPosition(go.x, go.y);
            this.setScale(0.05);
            this.setColor(cc.YELLOW);
            this.setTag(1);
        }


        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
        this.y += dt * Objs.bulletSpeed;
    },

    checkCollision: function(){
    },
});