/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

var Enemy = cc.Sprite.extend({

    type: 1,

    maxHealth: 100,
    health: 100,
    atkDmg: 5,
    atkRate: 10,
    atkChance: 0.02,

    cooldown: 0,

    ctor:function (x, y, type) {
        switch (type) {
            case 2:
                this._super(res.box2_png);
                break;
            case 3:
                this._super(res.box3_png);
                break;
            default:
                this._super(res.box1_png);
        }

        this.setPosition(x, y);
        this.setRotation(180);
        this.setScale(0.15);
        this.setLocalZOrder(1);
        this.setTag(0);
        this.type = type;

        switch (this.type) {
            case 2:
                this.maxHealth = 150;
                this.atkDmg = 7;
                this.atkRate = 7;
                this.atkChance = 0.1;
                break;
            case 3:
                this.maxHealth = 200;
                this.atkDmg = 10;
                this.atkRate = 5;
                this.atkChance = 0.2;
                break;
            default:
        }
        this.health = this.maxHealth;

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

        this.setColor(cc.color(255, 255 * this.health / this.maxHealth, 255 * this.health / this.maxHealth));

        if (this.cooldown <= 0) {
            if (Math.random() < this.atkChance) {
                var bullet = new Bullet(this, this.atkDmg);
                this.getParent().getParent().addChild(bullet);
            }
            this.cooldown = this.atkRate;
        }
        else {
            this.cooldown -= dt;
        }

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
        Objs.Point += this.type * 10;
        this.removeFromParent();
    }
});