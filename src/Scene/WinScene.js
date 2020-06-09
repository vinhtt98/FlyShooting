/**
 * Created by CPU60126_LOCAL on 6/9/2020.
 */

var WinScene = cc.Scene.extend({//create the scene and start the game

    captionTxt: "Victory!",

    ctor:function() {
        this._super();
        var size = cc.director.getVisibleSize();

        var yBtn = 2*size.height/5;

        var name = cc.LabelTTF.create(this.captionTxt, res.TitleFont, 120);
        name.setPosition(cc.winSize.width/2, 4*cc.winSize.height/5);
        this.addChild(name);

        var score = "Your score: " + JSON.stringify(Objs.Point);
        var scoreTxt = cc.LabelTTF.create(score, res.TitleFont, 60);
        scoreTxt.setPosition(cc.winSize.width/2, 3*cc.winSize.height/5);
        this.addChild(scoreTxt);

        var btnRetry = gv.commonButton(200, 64, cc.winSize.width/2, yBtn,"Retry");
        this.addChild(btnRetry);
        btnRetry.addClickEventListener(this.onSelectRetry.bind(this));

        var btnExit = gv.commonButton(200, 64, cc.winSize.width/2, yBtn/2,"Main Menu");
        this.addChild(btnExit);
        btnExit.addClickEventListener(this.onSelectExit.bind(this));

    },

    onEnter:function(){
        this._super();
    },

    onSelectRetry:function(sender)
    {
        fr.view(GameScene);
    },

    onSelectExit:function(sender)
    {
        fr.view(MenuScene);
    }
});