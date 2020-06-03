/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

var Player = cc.Sprite.extend({//main scene

    h_val: 0,

    ctor:function () {
        this._super(res.box_png);

        this.setPosition(cc.winSize.width/2, cc.winSize.height/2 - 200);
        this.setScale(0.1);
        this.setTag(1);

        Objs.Player.go = this;

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
        var turbo = KEYS[cc.KEY.shift] ? 5 : 1;
        var deltaX = this.getContentSize().width * this.getScale() / 2;
        var deltaY = this.getContentSize().height * this.getScale() / 2;
        if (KEYS[cc.KEY.up]) {
            this.y += dt * Objs.Player.speed * turbo;
            this.setColor(this.HSVtoRGB(this.h_val/360, 1, 1));
            this.h_val = (this.h_val + 5) % 360;
        }
        if (KEYS[cc.KEY.down]) {
            this.y -= dt * Objs.Player.speed * turbo;
            this.setColor(this.HSVtoRGB(this.h_val/360, 1, 1));
            this.h_val = (this.h_val + 5) % 360;
        }
        if (KEYS[cc.KEY.left]) {
            this.x -= dt * Objs.Player.speed * turbo;
            this.setColor(this.HSVtoRGB(this.h_val/360, 1, 1));
            this.h_val = (this.h_val + 5) % 360;
        }
        if (KEYS[cc.KEY.right]) {
            this.x += dt * Objs.Player.speed * turbo;
            this.setColor(this.HSVtoRGB(this.h_val/360, 1, 1));
            this.h_val = (this.h_val + 5) % 360;
        }
        //if (KEYS[cc.KEY.shift]) {
        //    this.setColor(this.HSVtoRGB(this.h_val/360, 1, 1));
        //    this.h_val = (this.h_val + 5) % 360;
        //}
        //else {
        //    this.setColor(cc.WHITE);
        //}
        if (this.x + deltaX > cc.winSize.width) {
            this.x = cc.winSize.width - deltaX;
        }
        if (this.x - deltaX < 0) {
            this.x = deltaX;
        }
        if (this.y + deltaY > cc.winSize.height) {
            this.y = cc.winSize.height - deltaY;
        }
        if (this.y - deltaY < 0) {
            this.y = deltaY;
        }

        var bullet = new Bullet(this.x, this.y);
        this
    },

    checkCollision: function(){
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