/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

var Enemy = cc.Sprite.extend({

    health: 100,
    atkDmg: 5,
    atkRate: 10000,

    cooldown: 0,

    ctor:function (x, y) {
        this._super(res.box_png);

        this.setPosition(x, y);
        this.setRotation(180);
        this.setScale(0.1);
        this.setLocalZOrder(1);
        this.setTag(0);

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
        if (this.cooldown <= 0) {
            var bullet = new Bullet(this, this.atkDmg);
            this.getParent().addChild(bullet);
            this.cooldown = this.atkRate;
        }
        else {
            this.cooldown -= dt;
        }

        this.setColor(cc.color(255, 255 * this.health / 100, 255 * this.health / 100));

        if (this.health <= 0) {
            this.selfDestruct();
        }
    },

    collideRect:function () {
        var deltaX = this.getContentSize().width * this.getScale() / 2;
        var deltaY = this.getContentSize().height * this.getScale() / 2;
        return cc.rect(this.x - deltaX, this.y - deltaY, deltaX * 2, deltaY * 2);
    },

    takeDamage: function(val) {
        this.health -= val;
    },

    selfDestruct: function(){
        this.removeFromParent();
    }
});