/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

var Enemy = cc.Sprite.extend({

    type: 1,

    maxHealth: 100,
    health: 100,
    atkDmg: 5,
    atkRate: 3,
    atkChance: 0.5,

    cooldown: 0,

    mostafa:null,

    ctor:function (x, y, type) {
        switch (type) {
            case 2:
                this._super(res.invader_b_1_png);
                break;
            case 3:
                this._super(res.invader_c_1_png);
                break;
            default:
                this._super(res.invader_a_1_png);
        }
        //this.creatAnimation();

        this.setPosition(x, y);
        this.setScale(0.7);
        this.setLocalZOrder(1);
        this.setTag(0);
        this.type = type;

        switch (this.type) {
            case 2:
                this.maxHealth = 150;
                this.atkDmg = 7;
                this.atkRate = 2;
                this.atkChance = 0.7;
                break;
            case 3:
                this.maxHealth = 200;
                this.atkDmg = 10;
                this.atkRate = 1;
                this.atkChance = 1.0;
                break;
            default:
        }
        this.health = this.maxHealth;
        this.cooldown = this.atkRate;

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
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
        return cc.rect(this.x - deltaX + this.getParent().dx, this.y - deltaY, deltaX * 2, deltaY * 2);
    },

    takeDamage: function(val) {
        this.health -= val;
    },

    selfDestruct: function(){
        Objs.Point += this.type * 10;
        this.getParent().deadCnt++;
        this.removeFromParent();
    },

    creatAnimation: function() {
        // Create sprite and set attributes
        this._super(res.invader_a_png);
        this.setScale(0.7);
        this.setLocalZOrder(1);
        this.setTag(0);

        //this.mostafa = cc.Sprite.create(res.invader_a_png);
        //this.mostafa.attr({
        //    x: this.mostafa.getContentSize().width,
        //    y: this.mostafa.getContentSize().height,
        //    scale: 0.7,
        //    rotation: 0
        //});
        //this.addChild(this.mostafa, 0);

        // Load sprite frames to frame cache, add texture node
        cc.spriteFrameCache.addSpriteFrames(res.invader_a_plist);
        var mostafaTexture = cc.textureCache.addImage(res.invader_a_png),
            mostafaImages  = cc.SpriteBatchNode.create(mostafaTexture);
        this.addChild(mostafaImages);

        var animFrames = [];
        var str = "";

            var spriteFrame = cc.spriteFrameCache.getSpriteFrame('InvaderA_00@2x.png');
            var animFrame = new cc.AnimationFrame();
            animFrame.initWithSpriteFrame(spriteFrame, 1, null);
            animFrames.push(animFrame);
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame('InvaderA_01@2x.png');
            var animFrame = new cc.AnimationFrame();
            animFrame.initWithSpriteFrame(spriteFrame, 1, null);
            animFrames.push(animFrame);

        var animation = cc.Animation.create(animFrames, 0.08, 100);
        var animate   = cc.Animate.create(animation);

        this.runAction(animate);
    }
});