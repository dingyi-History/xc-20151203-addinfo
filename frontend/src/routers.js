'use strict';
// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。


module.exports = function (router) {
    router.map({
        '/index': {
            name : 'index',
            component: require('./views/index.vue')
        },
        '/info': {
            name : 'info',
            component: require('./views/info.vue')
        }
    });
};