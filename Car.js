AFRAME.registerComponent("car", {
    schema:{
        model_obj: {type:"string", default:"./assets/Car/tinker.obj"},
        model_mtl: {type:"string", default:"./assets/Car/obj.mtl"},
        rotation: {type:"number", default: 0}
    },
    init: function(){
        this.el.setAttribute("obj-model", {
            obj: this.data.model_obj,
            mtl: this.data.model_mtl
        });
    },
    tick: function(){
        this.data.rotation = this.data.rotation + 1;
        var rotate = this.el.getAttribute("rotation")
        rotate.y = this.data.rotation
        this.el.setAttribute("rotation", {x: rotate.x, y: rotate.y, z: rotate.z})
    }
})