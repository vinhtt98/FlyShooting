/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

var Bullet = cc.Sprite.extend({//main scene

    ctor:function (x, y) {
        this._super(res.box_png);

        this.setPosition(x, y);
        this.setScale(0.01);
        this.setColor(cc.YELLOW);
        this.setTag(1);

        Objs.Player = this;

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
        this.y += dt;
    },

    checkCollision: function(){
    },
});