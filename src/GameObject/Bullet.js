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
        if (this.y < -cc.winSize.height || this.y > cc.winSize.height * 2) {
            this.removeFromParent();
        }
        if (this.x < -cc.winSize.width || this.x > cc.winSize.width * 2) {
            this.removeFromParent();
        }
    },

    collideRect:function (x, y) {
        var deltaX = this.getContentSize().width * this.getScale() / 2;
        var deltaY = this.getContentSize().height * this.getScale() / 2;
        return cc.rect(x - deltaX, y - deltaY, deltaX * 2, deltaY * 2);
    },

    checkCollision: function(){
    },
});