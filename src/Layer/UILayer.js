/**
 * Created by VinhTT on 2020-06-09.
 */

var UILayer = cc.Layer.extend({

    playerHealthTxt: null,
    pointTxt: null,

    ctor:function () {
        this._super();

        this.playerHealthTxt = cc.LabelTTF.create("100", res.TitleFont, 20);
        this.playerHealthTxt.setPosition(cc.winSize.width-20, cc.winSize.height-10);
        this.addChild(this.playerHealthTxt);

        this.pointTxt = cc.LabelTTF.create("100", res.TitleFont, 20);
        this.pointTxt.setPosition(30, cc.winSize.height-10);
        this.addChild(this.pointTxt);

        this.scheduleUpdate();//runs update() every frame
    },

    update: function(dt){//update callback, run every frame
        this.playerHealthTxt.setString(Math.round(Objs.Player.health));
        this.pointTxt.setString(Math.round(Objs.Point));
    }
});