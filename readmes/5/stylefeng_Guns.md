<p align="center">
    <img src="https://images.gitee.com/uploads/images/2019/0109/214218_d2aa949b_551203.png" width="300">
    <br>      
    <br>      
    <p align="center">
        Guns是一个现代化的Java应用开发框架，基于主流技术Spring Boot3 + Vue3 + JDK17，Guns的核心理念是提高开发人员开发效率，降低企业信息化系统的开发成本。
        <br>
        <br>
        <a href="http://spring.io/projects/spring-boot">
            <img src="https://img.shields.io/badge/spring--boot-3.3.2-green.svg" alt="spring-boot">
        </a>
        <a href="http://mp.baomidou.com">
            <img src="https://img.shields.io/badge/mybatis--plus-3.5.7-blue.svg" alt="mybatis-plus">
        </a>  
        <a href="https://www.hutool.cn/">
            <img src="https://img.shields.io/badge/hutool-5.8.29-blue.svg" alt="hutool">
        </a>
        <a href="https://gitcode.com/javaguns/guns">
            <img src="https://gitcode.com/javaguns/guns/star/badge.svg" alt="gitcode">
        </a>
    </p>
</p>

-----------------------------------------------------------------------------------------------

## Gitee 2025开源项目评选投票

![输入图片说明](.README_images/gitee.png)

Guns正在参加2025 Gitee开源项目评选，开源不易，每一票都是继续免费迭代下去的动力！ [请点击投票](https://gitee.com/activity/2025opensource?ident=IEHM4J)

## 官方网站

[https://www.javaguns.com/](https://www.javaguns.com/)

## 快速启动

### Guns v8前端启动

前端项目位置：**当前项目的guns-front-project目录下。[guns-front-project](https://gitee.com/stylefeng/guns/tree/master/guns-front-project)**

前端需要使用**Node 20**，请先安装node20，请使用yarn启动，具体启动方法如下：

```shell
# 安装依赖
yarn

# 启动前端项目
yarn run dev

# 打包
npm run build
```

### Guns v8后端启动

以下为后台启动的过程：

**重要 重要 重要**，不要手动初始化sql，因为集成了flyway会自动初始化表，准备空库即可。

1. 在mysql数据库中创建guns数据库，推荐mysql 5.7或8版本。

2. 修改`application-local.yml`中的数据库连接配置连接到您的数据库。

3. 打开`ProjectStartApplication`运行main方法即可启动。

4. 初始化账号密码：admin/123456

## 扫码关注官方公众号和官方微信群

<table>
    <tr>
        <td>官方公众号</td>
        <td><img src="https://images.gitee.com/uploads/images/2019/0415/104911_9bc924a5_551203.png" width="120"/></td>
        <td>扫码邀请入群</td>
        <td><img src="https://images.gitee.com/uploads/images/2019/0419/103622_d6e9fa5d_551203.png" width="120"/></td>
    </tr>
</table>

## 更新日志

### v8.3.5-2025年11月12日

1. 恢复图片验证码功能
2. 修复前端和后端的图片验证码，可同时开启两个验证码开关
3. 【前端】美化前端登录界面，更新底图
4. 【前端】美化拖拽验证码样式，并优化图片加载速度
5. 更新业务分组相关接口，优化下拉列表接口、新增分组接口、删除分组接口
6. sys_config配置表美化界面，方便进行修改变量配置，并把常用配置放在最前
7. 整体菜单风格优化，在保留原有风格下，增加了顶部应用模式。菜单导航改为4种模式左侧垂直、左侧双排、水平、混合双列。

### v8.3.4-2025年10月28日

1. 组织加层级管理，可自定义层级标识
2. 组织机构左侧树组件增加可拖拽自定义宽度范围
3. 角色管理功能升级，增加系统角色、业务角色和公司角色的区分
4. 数据范围升级，从单一绑定数据范围增加到多条绑定数据范围
5. 修复头像刷新缓存的bug
6. 【前端】新增分割面板 GunsSplitLayout 组件
7. 【前端】CommonTable组件新增工具栏 TableTool 组件
8. 【前端】美化ant-modal的边框
9. 【前端】修改TableTool的自定义列缓存逻辑
10. 【前端】优化Selection公共选择组件整体样式
11. 【前端】Layout新增顶部菜单栏布局，新增侧栏双菜单
12. 【前端】更新vue版本，兼容npm安装
13. 【前端】美化登录页面样式
14. 【前端】修复抽屉关闭按钮不能嵌套bug
15. 【前端】修复外链跳转地址不对bug

### v8.3.0-2024年11月9日

1. 升级核心包版本，升级Guns支持Spring Boot3 + JDK17。
2. 更新message消息列表界面。
3. 更新接参数接收日期格式，支持更多的日期格式。
4. 优化文件存储位置，支持文件存储在jar包所在目录。
5. 增加国密加解密算法的工具类。
6. 增加黑白名单功能的支持，更新密码安全策略的配置支持。
7. 更新对多次重试密码锁定用户的支持。
8. 完善scanner资源扫描器的功能，针对复杂类型的字段支持效果更好。
9. file模块更新对多文件上传的支持。
10. file模块增加对文件md5值记录的功能。

### v8.1.2-2024年3月25日

1. 界面整体经过专业UI设计，更加现代化、美观，更新系统菜单和按钮相关的图标，采用iconfont库图标。
2. 用户信息增加一些常用字段，并增加用户绑定多机构功能。
3. 系统右上角增加用户多机构切换功能。
4. 系统右上角增加应用切换功能，使用应用可以为系统的菜单分类区分。
5. 优化了大部分代码，提升了系统性能。
6. 角色增加区分系统角色、业务角色、公司角色，让用户在多机构任职展示不同的权限控制。
7. 权限绑定支持上述3种角色的权限绑定。
8. 菜单界面重构，支持按应用区分多颗树的菜单，更加直观。
9. 增加安全策略功能，支持密码重试策略，次数配置，支持密码失效策略，口令最小长度等配置。
10. 优化首页常用功能的配置，可以快捷设置常用功能。
11. 怎么加独立的授权界面，可以给用户在不同机构绑定不同业务角色和公司角色。
12. 原有用户管理界面的绑定角色改为只绑定系统角色。
13. 增加独立的@DataScope注解，可以便捷设置用户权限。
14. 文档待更新，后续会陆续更新。

## Guns介绍

Guns是一个现代化的Java应用开发框架，基于主流技术**Spring Boot3 + Vue3 + Antd Vue**，Guns基于**插件化架构**，通过灵活组装插件，可以进行集成和拓展相关功能。

**Guns v8**已经发布，前后端代码以及核心包源码，均可在如下Gitee仓库可找到：

主项目：[https://gitee.com/stylefeng/guns](https://gitee.com/stylefeng/guns)

主项目GitCode地址：[https://gitcode.com/javaguns/guns](https://gitcode.com/javaguns/guns)

核心包：[https://gitee.com/stylefeng/roses](https://gitee.com/stylefeng/roses)

核心包GitCode地址：[https://gitcode.com/javaguns/roses](https://gitcode.com/javaguns/roses)

经过多年发展，Guns已在业界具有一定影响力。Guns技术架构可以直接应用到任何软件产品和技术公司自身的技术体系建设中，帮助企业解决**规范问题**，解决**复用问题**，解决**架构问题**。

<table>
  <tr>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/108d0988.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/52c5b334.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/02b868c3.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/c02c7be7.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/bc2943ac.png" /></td>
  </tr>
  <tr>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/aa8017f8.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/de43b7f6.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/636236e9.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/eb69a366.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/661559e2.png" /></td>
  </tr>
  <tr>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/7b64d9ed.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/179e4c7e.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/dd506aa8.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/d426da96.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/b85c2082.png" /></td>
  </tr>
  <tr>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/22cf3c25.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/6b9ba4e4.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/0bd3a450.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/a17a23f7.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/b391088e.png" /></td>
  </tr>
  <tr>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/9078821a.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/ac3c1d91.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/bfbf6bf2.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/31be2882.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/c9af0123.png" /></td>
  </tr>
  <tr>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/b95cf796.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/bb50dd3f.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/1c37b011.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/bf9c1bd9.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/f2d9af7f.png" /></td>
  </tr>
  <tr>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/7d48ba1a.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/64a95acf.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/9337d22b.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/ab06518c.png" /></td>
    <td><img src="https://gitee.com/stylefeng/guns/raw/master/.README_images/5a327d3c.png" /></td>
  </tr>
</table>

## Guns功能列表

- 1.控制面板
- 2.用户管理
- 3.职位管理
- 4.机构管理
- 5.应用管理
- 6.角色管理
- 7.菜单管理
- 8.资源查看
- 9.系统配置
- 10.字典管理
- 11.在线用户
- 12.定时任务
- 13.文件管理
- 14.多数据源
- 15.操作日志
- 16.登录日志
- 17.通知管理
- 18.SQL监控
- 19.服务器信息
- 20.持续更新...

## Guns插件列表

Guns默认封装了很多功能插件，引用这些插件并使用相关接口，开箱即用，也可以以插件化方式拓展自定义的插件：

- 1.缓存插件（内存和Redis）
- 2.系统配置
- 3.多数据源插件
- 4.邮件插件
- 5.文件插件（minio、本地、阿里云、腾讯云）
- 6.groovy脚本
- 7.jwt插件
- 8.日志插件（文件、数据库）
- 9.excel导出
- 10.拼音转化
- 11.短信插件（阿里云、腾讯云）
- 12.websocket
- 13.定时任务
- 14.参数校验
- 15.wrapper包装
- 16.C端用户
- 17.Demo拦截器
- 18.消息插件
- 19.持续更新...

## Guns曾获荣誉

*GitCode G-Start毕业项目。*

*Gitee GVP最有价值开源项目。*

*开源中国2018年度最受欢迎中国开源软件。*

*开源中国2019年度最受欢迎中国开源软件。*

*开源中国2020年度最受欢迎中国开源软件。*

*开源中国2021年度最受欢迎中国开源软件。*

*2021“科创中国”开源创新榜－－年度优秀开源产品。*

![](.README_images/1747978707335.png)

![1-4](.README_images/1-4.png)

![1-5](.README_images/1-5.png)