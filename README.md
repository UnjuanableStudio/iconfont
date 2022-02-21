# 安装

npm
```
npm install @dtlc/iconfont
```

yarn
```
yarn add @dtlc/iconfont
```

# 使用

1.访问 iconfont.cn

https://www.iconfont.cn/

2. 创建图标项目
3. 创建css的cdn链接

```
// main.js
import iconfont from '@dtlc/iconfont'
app.use(iconfont, '//at.alicdn.com/t/font_cdn_url.css')
```

```
// component
 <icon-font type="icon-space-copy"></icon-font>
```

# 参数

### type

图标类型代码   
required：true

### font

项目中设置的字体名称标识   
required：false   
default：'iconfont'   

### color

字体颜色   
required：false   
default：'auto'

### size

字体大小   
required：false   
default: 'inherit'   

