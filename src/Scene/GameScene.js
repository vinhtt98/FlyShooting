/**
 * Created by CPU60126_LOCAL on 6/2/2020.
 */

var GameScene = cc.Scene.extend({//create the scene and start the game
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});