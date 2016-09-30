# Meow

> 小组共享项目管理网站

## 配置方法
如果没有安装node.js，先安装[node.js](https://nodejs.org/en/)
安装好以后，clone此git到本地，建议使用github for mac或者github for windows客户端
``` bash
# 进入项目文件夹
cd path/to/meow

# 安装依赖项
npm install

# 在命令行里运行gulp命令，自动化webpack打包，生成dist文件夹，启动开发服务器browsersync
gulp

# 服务器启动是自动的，如果没有跳出，访问localhost:2311
```

##使用方法
大家的部分都在component里面，如果需要安装js或者css插件，如果包的名字叫package-name，使用如下命令
```
npm install package-name --save
```

如果要使用安装的插件，对于js，在.vue文件的script标签里像如下的方式使用
``` html
<script>
import package_name from "package-name"
//之后，package_name将会作为一个对象供我们使用
</script>
```

对于css，在.vue文件的style标签里像如下的方式使用
``` html
<style>
@import "path/to/xxx.css"

// 注意这里的path/to一定要从当前文件夹或者全局去找，不能用服务器链接的方式访问
// 如果使用webstorm，会有提示是否能找到当前路径中的文件，不容易出错

</style>
```

##其他注意事项
* 因为使用了browsersync兼听，每次修改完的保存操作都可以自动刷新网页
* 如果没有自动刷新，ctrl+c停止终端的服务器，再运行一次gulp，即可
* 如果再次运行gulp报错，就查看错误，解决以后再push，不然直接上传查起来很麻烦
* 每人只负责自己的那个文件夹
