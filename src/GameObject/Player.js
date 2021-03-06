/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

var Player = cc.Sprite.extend({//main scene

    health: 100,
    speed: 250,
    atkDmg: 25,
    atkRate: 0.25,

    h_val: 0,
    cooldown: 0,

    isDead:false,

    ctor:function () {
        this._super(res.ship_png);

        this.setPosition(cc.winSize.width/2, cc.winSize.height/2 - 200);
        this.setScale(0.7);
        this.setLocalZOrder(1);
        this.setTag(0);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (key, event) {
                KEYS[key] = true;
            },
            onKeyReleased: function (key, event) {
                KEYS[key] = false;
            }
        }, this);

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
        if (this.isDead)
            return;

        var turbo = KEYS[cc.KEY.shift] ? 4 : 1;
        var deltaX = this.getContentSize().width * this.getScale() / 2;
        var deltaY = this.getContentSize().height * this.getScale() / 2;
        var isHold = false;
        if (KEYS[cc.KEY.up]) {
            this.y += dt * this.speed * turbo;
            this.y = Math.min(this.y, cc.winSize.height - deltaY)
            isHold = true;
        }
        if (KEYS[cc.KEY.down]) {
            this.y -= dt * this.speed * turbo;
            this.y = Math.max(this.y, deltaY);
            isHold = true;
        }
        if (KEYS[cc.KEY.left]) {
            this.x -= dt * this.speed * turbo;
            this.x = Math.max(this.x, deltaX);
            isHold = true;
        }
        if (KEYS[cc.KEY.right]) {
            this.x += dt * this.speed * turbo;
            this.x = Math.min(this.x, cc.winSize.width - deltaX);
            isHold = true;
        }
        if (isHold) {
            this.setColor(this.HSVtoRGB(this.h_val / 360, 1, 1));
            this.h_val = (this.h_val + 5) % 360;
        }
        //if (KEYS[cc.KEY.shift]) {
        //    this.setColor(this.HSVtoRGB(this.h_val/360, 1, 1));
        //    this.h_val = (this.h_val + 5) % 360;
        //}
        //else {
        //    this.setColor(cc.WHITE);
        //}
        if (this.cooldown <= 0) {
            var bullet = new Bullet(this, this.atkDmg);
            this.getParent().addChild(bullet);
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
        fr.view(LoseScene);
        this.isDead = true;
        this.removeFromParent();
    },

    HSVtoRGB: function(h, s, v) {
        var r, g, b, i, f, p, q, t;
        if (arguments.length === 1) {
            s = h.s, v = h.v, h = h.h;
        }
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }
});