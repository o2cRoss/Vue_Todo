// 导入Vue
import Vue from 'vue';

import router from './router.js'
// 导入App组件
import App from './App.vue';

// 创建Vue 根实例
new Vue({
    el: '#app',
    // components: {
    //     //组件名： 组件对象 App: App 可以简写成如下的代码
    //     App
    // },
    // template: '<App/>'
    render: c => c(App),
    router: router
});
//挂载App组件

// const arr =[1,2,3].map(item => item +1 );
// console.log(arr);
