# Vue.js学习资源
vuejs中文官网 - http://cn.vuejs.org/

vuejs源码 - https://github.com/vuejs/vue

vuejs官方工具 - https://github.com/vuejs

vuejs官方论坛 - http://forum.vuejs.org

# vue-cli 脚手架
``` bash
安装vue-cli.
> npm install -g vue-cli

下载一个webpack-simple项目
> vue init webpack-simple cli-name

成功后cd 进入文件夹, 安装依赖
> npm install
> npm run dev

访问 http://localhost:8080/
```

# vue实例对象
``` javascript
new Vue({
    el: '#app',
    template: '<div>{{ fruit }}</div>',
    data: {
        fruit: 'apple'
    }
});
```

5.4 第三章1-4 done
5.5 第三章 done
5.5 第四章1-5 15:00