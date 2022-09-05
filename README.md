# app

### 项目目录
node_modules: 项目依赖文件夹
public: 一般防止一些静态资源，注意的是webpack打包时会原封不动的放到dist下
src: 源码文件
    assets: 一般放静态资源，注意的是webpack打包时会当作一个模块打包到JS文件中
    components: 一般防止非路由组件
    App.vue: 唯一的根组件
    main.js: 程序的入口文件，是整个程序最先执行的文件
.gitignore: git的忽略文件
bable.config.js: 配置文件（bable相关）
package: 记录项目信息（名字，依赖，怎么运行...）