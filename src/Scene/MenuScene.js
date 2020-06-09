/**
 * Created by CPU60126_LOCAL on 6/9/2020.
 */

var MenuScene = cc.Scene.extend({//create the scene and start the game
    ctor:function() {
        this._super();
        var size = cc.director.getVisibleSize();

        var yBtn = 1.5*size.height/5;

        var name = cc.LabelTTF.create("Fly Shooting", res.TitleFont, 120);
        name.setPosition(cc.winSize.width/2, 3.5*cc.winSize.height/5);
        this.addChild(name);

        var btnPlay = gv.commonButton(200, 64, cc.winSize.width/2, yBtn,"Play");
        this.addChild(btnPlay);
        btnPlay.addClickEventListener(this.onSelectPlay.bind(this));

    },

    onEnter:function(){
        this._super();
    },

    onSelectPlay:function(sender)
    {
        fr.view(GameScene);
    }
});