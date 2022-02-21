import iconfont from "./iconfont.vue";

iconfont.install = function (app) {
    app.component(iconfont.name, iconfont)
}

export {iconfont}
