/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

var Bullet = cc.Sprite.extend({//main scene

    speed: 1000,
    damage: null,
    direction: null,

    ctor:function (go, atkDmg) {
        this._super(res.box_png);

        if (go === Objs.Player) {
            this.direction = 1;
            this.setPosition(go.x, go.y);
            this.setScale(0.05);
            this.setColor(cc.color.YELLOW);
            this.setLocalZOrder(0);
            //this.setTag(2);
        }
        else {
            this.direction = -1;
            this.setPosition(go.x, go.y);
            this.setScale(0.05);
            this.setColor(cc.color.RED);
            this.setLocalZOrder(0);
            //this.setTag(3);
        }
        this.setTag(1);
        this.damage = atkDmg;

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
        this.y += dt * this.speed * this.direction;
        if (this.y < -cc.winSize.height ||
            this.y > cc.winSize.height * 2 ||
            this.x < -cc.winSize.width ||
            this.x > cc.winSize.width * 2) {
            this.selfDestruct();
        }

    },

    selfDestruct: function(){
        this.removeFromParent();
    },

    collideRect:function () {
        var deltaX = this.getContentSize().width * this.getScale() / 2;
        var deltaY = this.getContentSize().height * this.getScale() / 2;
        return cc.rect(this.x - deltaX, this.y - deltaY, deltaX * 2, deltaY * 2);
    },

    checkCollision: function(){
    },
});