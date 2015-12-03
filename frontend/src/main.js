var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);


// 定义组件
var a = require('./components/a.vue');
var b = require('./components/b.vue');
var App = require('./app.vue');//根组件

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter();

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由

router.map({
    '/':{
        subRoutes:{
            '/a':{component:a},
            '/b':{component:b}
        }
    }
});


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');