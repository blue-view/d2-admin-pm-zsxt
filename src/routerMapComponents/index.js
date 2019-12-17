const files = require.context("./", true, /\.js$/);
import layoutHeaderAside from "@/layout/header-aside";

let componentMaps = {
    layoutHeaderAside: layoutHeaderAside,
    ywgl: () =>
        import ( /* webpackChunkName: "menu" */ "@/views/base/ywgl")
};
files.keys().forEach(key => {
    if (key === "./index.js") return;
    Object.assign(componentMaps, files(key).default);
});
export default componentMaps;
