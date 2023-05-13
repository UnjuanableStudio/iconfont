import {iconfont} from "./src";

const install = function (app, cdn = null) {
    if (cdn !== null) {
        addIconByLink(cdn)
    }
    app.component(iconfont.name, iconfont)
    app.config.globalProperties.$iconfont = icon;
}

/**
 * 构造一个icon字体图标
 * @param type iconfont icon type
 * @param size
 * @param family iconfont font family
 * @returns {string}
 */
function icon(type, size = 16, family = "iconfont") {
    return `<i class="${family} ${type}" style="font-size:${size}"></i>`
}

function addIconByLink(url) {
    let doc = document;
    const link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", url);

    const heads = doc.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(link);
    else
        doc.documentElement.appendChild(link);
}

export default {
    install
}

export {iconfont, addIconByLink, icon}
