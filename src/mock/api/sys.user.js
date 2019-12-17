const userInfo = {
    PermissionInfo: {
        userName: "admin",
        // userRoles: ["R_MENUADMIN"],
        // userPermissions: ["p_menu_view", "p_menu_edit", "p_menu_menu"],
        userRoles: [],
        userPermissions: [],
        accessMenus: [{
            title: "基础数据",
            icon: "cogs",
            path: '/base',
            children: [{
                title: "业务管理",
                path: "/base/ywgl",
                icon: "th-list"
            }]
        }],
        accessRoutes: [{
            name: "base",
            path: "/base",
            component: "layoutHeaderAside",
            componentPath: "layout/header-aside/layout",
            meta: {
                title: "基础数据",
                cache: true
            },
            children: [{
                name: "ywglPage",
                path: "/base/ywgl",
                component: "ywgl",
                componentPath: "views/base/ywgl/index",
                meta: {
                    title: "业务管理",
                    cache: true
                },
            }]
        }],
        isAdmin: 1,
        avatarUrl: "https://api.adorable.io/avatars/85/abott@adorable.png"
    }
};
export default [{
    path: "/api/userInfo",
    method: "get",
    handle() {
        return {
            statusCode: 200,
            msg: "",
            data: userInfo.PermissionInfo
        };
    }
}];
