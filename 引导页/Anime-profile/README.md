# 二次元个人引导主页  

这是一个漂亮的二次元个人主页，希望大家提出意见或指出错误。同时，也欢迎大佬参与开发。

## 下载地址：  

+ 码云：[Gitee](https://gitee.com/jhwhcm/Anime-profile)    

## 演示页面：    
 
+ 二次元个人引导主页 ：[https://my.heheda.top](https://my.heheda.top)  


## 组件：  

### 背景图：

背景图标调用的是本人自建的动漫API接口：[https://cartoon.heheda.top/url.php](https://cartoon.heheda.top/url.php)，调用的人很多，所以不是很稳定，嫌弃的话可以自行更换。

若背景图片无法加载，或者您想更换，您必须修改以下内容：
> heheda/css/main.css 第187行url后面括号内的链接

> heheda/css/main.css 第188行url后面括号内的链接

> heheda/css/main.css 第189行url后面括号内的链接

> heheda/css/main.css 第190行url后面括号内的链接

将上面指出的链接[https://cartoon.heheda.top/url.php]改为您指定的图片链接即可。

#### 如果您想提升加载效率,您可以考虑进行以下操作：

【非必须，小白勿操作！！！】

1.修改以下链接[https://cartoon.heheda.top]为您的图片链接的主域地址。
> index.html 中第76行

> index.html 中第80行

2.删除以下内容：

【注意仔细核对】

> index.html 中第77行

<link rel="preconnect" href="https://tva1.sinaimg.cn/" crossorigin>

> index.html 中第81行

<link rel="dns-prefetch" href="https://tva1.sinaimg.cn/">

### 背景音乐：

背景音乐是直接调用本地，可能占用服务器带宽。

注意：带宽小的服务器，建议使用外链的方式，否则可能导致主页无法加载！
> 1.您可以在‘index.html’文件的222行处修改。

> 2.若您不需要背景音乐，您也可以直接注释掉，这样它就不加载了。

您可以任意使用上面两种方法来改善您的项目，这是您的自由。

### 图标：

项目应用的图标库地址：

+ [http://www.fontawesome.com.cn/faicons/](http://www.fontawesome.com.cn/faicons/)

#### 使用方法：

直接替换‘a’标签内的‘class’即可

#### 温馨提示：

部分较新的图标可能不受支持，您可以更换相似的图标代替，或者提示我进行项目更新

## 常见问题：

1.页面不加载（一直转圈圈）
> 这一般是背景图片没有加载或者超时。

2.背景音乐无声
> 请检查背景音乐是否加载。

## 未来：

1.完善PWA渐进式应用

2.优化代码

## 期待您的加入！！！
QQ:2585649532

Email:web@email.heheda.top

## 请我喝杯奶茶

![Image](https://gitee.com/jhwhcm/gallery/raw/master/4d2489ec589f67def3207747db70f1f.png)

![Image](https://gitee.com/jhwhcm/gallery/raw/master/a8b9630f3b77ac5e64bf3dc50b65330.png)

![Image](https://gitee.com/jhwhcm/gallery/raw/master/4a1daae7da8bf63f0d271483f59200c.png)