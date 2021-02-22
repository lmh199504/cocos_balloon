// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        enabled_collision:{
            default:false,
            tooltip:'Enabled the colider manager'
        },
        enabled_draw:{
            default:false,
            tooltip:'Enabled draw collider'
        },
        enabled_bounding:{
            default:false,
            tooltip:'Enabled draw collider bounding box'
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // Get the collision manager.
        let manager = cc.director.getCollisionManager();

        // Enabled the colider manager.
        manager.enabled = this.enabled_collision;

        // Enabled draw collider
        manager.enabledDebugDraw = this.enabled_draw;

        // Enabled draw collider bounding box
        manager.enabledDrawBoundingBox = this.enabled_bounding;
    },

    start () {

    },

    // update (dt) {},
});
