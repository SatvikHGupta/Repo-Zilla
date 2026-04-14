English | [中文](./README-zh.md)

multipages-generator [![NPM version](https://badge.fury.io/js/multipages-generator.png)](http://badge.fury.io/js/multipages-generator)
======

[![NPM](https://nodei.co/npm/multipages-generator.png?downloads=true&stars=true)](https://nodei.co/npm/multipages-generator)

multipages-generator is a multiple pages application generator (or CLI) for mobile. It has the whole DevOps which includes development, build, publish and the deployment. It is One-stop solution for mobile H5.

## Scene
Multipages-generator suite for multipages website whatever is mobile website or PC website, H5 in hybird app. For example: [this](http://www.ih5.cn/not-logged-in/template), [chiji game](https://uedkit.meiyou.com/annualmeeting/game/).

## Feature
1. One-stop mobile MPA solution with modern web technologys like Nodejs, webpack4, babel, Vue with server side rendering. 
2. Efficient commands like new, develop,build,upload,analysis,deploy.
3. Best practices for architechure and organization.
4. 🔥 (new) Support Vue SSR and no framework or any other framework you like.
5. Support development,producton ENV.
6. Support sass、less、postcss
7. Hot code reload for CSS and JS
8. Support upload to Ali OSS and Qiniu OSS
9. Support mobile adaptation with [taobao flexible layout solution](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)，fit different screen size and DPI.
10. Support pm2 deployment


## Document
* [Global install](#global-install)
* [Create a project](#create-a-project)
* [Commands](#commands)
* [Create a new module](#create-a-new-module)
* [Develop a module](#develop-a-module)
* [Build a module](#build-a-module)
* [Upload](#upload)
    * [Qiniu OSS](#qiniu-oss)
    * [Ali OSS](#ali-oss)
* [Config](#config)
* [TodoList](#TodoList)

## Global install ⚙️

### Envirment requirement

NodeJS: >= 6.11.0

OS: MacOS,windows,centos

### install

```bash
npm install multipages-generator -g  //now the latest is 1.6.x
```

## Create a project 📽

### init a project
```bash
meet init
```

### Choose a template:
- No JavaScript framework (You can add your framework like jQuery，zepto，vue，react and so on.)
- Vue width SSR (It's add SSR default for now)
```bash
? Select your JavaScript framework (Use arrow keys)
❯ No JavaScript framework 
  Vue width SSR 
```

### start 
When initialized, install the dependencis and start the demo
```bash
C:\xxx\workspace>meet init
? Project name: h5-project
  __  __           _      ____ _     ___
 |  \/  | ___  ___| |_   / ___| |   |_ _|
 | |\/| |/ _ \/ _ \ __| | |   | |    | |
 | |  | |  __/  __/ |_  | |___| |___ | |
 |_|  |_|\___|\___|\__|  \____|_____|___|

   [Success] Project h5-project init finished, be pleasure to use 😊!

   Install dependencies:
     cd h5-project && npm install

   Run the app:
     meet start demo
   Or:
     pm2 start process.json

```

## Commands
Use meet -help to show all the commands.

```bash
C:\xxx\workspace>meet -help

  Usage: meet [command]

  Options:

    -v, --version                 output the version number
    -h, --help                    output usage information

  Commands:

    init                          initialize your project
    new [module]/[module]-[page]  generate_native a new module
    start [module]                start application in development mode
    build [module]                build a module using webpack
    upload                        upload dist files to CDN
    analyse                       analysis dist files size and percent
    git                           auto git commit and push

```

## Create a new module

meet new [module]/[module]-[page]

### Description
Attention, create a new module use like this
```
meet new [module]
```
When you need to create a new page in the existed module, use this command:
```
meet new [module]-[page]
```

### For a example, create a game H5(module)

```bash
meet new game  // create a game with default page index.html
```
Because it's so called multiple pages generator, so create another page use this:
```
meet new game-detail // create the game detail.html in the game module
```

And you got a list files like this:
```bash
game
 ├─images // this is no images, just a dictory
 ├─js
 | ├─index
 | | ├─business.js  // the business js(Expand as you wish)
 | | ├─service.js   // http service code
 | | └─util.js      // utils code
 | └─index.js       // the main js file
 ├─styles
 | └─index.css      // css code
 └─views
   └─index.html     // html code
```

## Develop a module
### meet start [module]

```
meet start demo
```

It started with this followed, you can choose a link to open in browser.
```
 √ Build done

[Tips] visit: http://localhost:8080/demo/
            : http://192.168.50.194:8080/demo/

```

Attention:
Vue CSR: http://localhost:8080/demo/?csr=true
Vue SSR: http://localhost:8080/demo/

### Hot reload

JS、CSS support hot code reload，HTML changes need man to refresh the browser.

![image](http://cnd.yintage.com/HRM.gif)

Html generated contain two marker, you don't need to worry about this. It's for better development and will removed when in build.

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <% include ../head.html %>
  <title>demo</title>
  <!--@hot-reload, will auto remove after compiled-->
  <link rel="stylesheet" data-hr="hot-reload" href="/demo/styles/index.css">
</head>
<body>
  <div>you content...</div>
  <!--@hot-reload, will auto remove after compiled-->
  <script type="text/javascript" data-hr="hot-reload" src="/common/js/hot-reload.js"></script>
</body>
</html>
```

## Build a module

### meet build [demo]

```bash
meet build demo
```

```bash
C:xxx\workspace\h5>meet build demo

> mg-template@1.0.0 build C:\meetyou\workspace\test\mg-workspace\h5
> cross-env NODE_ENV=production node build/commands/build.js "demo"

Delete dist directory!
  ⣾ Building...
  ⣽ lasted 1 seconds. HTML去除开发环境hotReload代码: ..\server\views\prod\demo\index.html
Hash: 2a217fb45f03fb354254
Version: webpack 4.17.2
Time: 1687ms
Built at: 2018-09-06 19:50:40
                               Asset      Size  Chunks             Chunk Names
                  index.12969e6e.css  4.71 KiB       0  [emitted]  index
                   index.080a1e3d.js  1.01 KiB       0  [emitted]  index
..\server\views\prod\demo\index.html  3.74 KiB          [emitted]
Entrypoint index = index.12969e6e.css index.080a1e3d.js

Upload dist files to Qiniu CDN：
Webpack Bundle Analyzer is started at http://127.0.0.1:8888
Use Ctrl+C to close it
[Success]: 上传文件至七牛云CDN成功！文件地址:http://cnd.yintage.com/index.080a1e3d.js
[Success]: 上传文件至七牛云CDN成功！文件地址:http://cnd.yintage.com/index.12969e6e.css
[Success]: 上传完毕 😊!
Use Ctrl+C to close it

```
After analysis powerd by webpack plugin, the page will show the code proportion.

![image](http://cnd.yintage.com/build.png)

### meet analyse

Use this command after builded.

```
meet analyse
```

![image](http://cnd.yintage.com/chart.png)

## Upload

### meet upload
Upload the files which in the dist dictory to OSS server. Config the Ali OSS or Qiniu OSS configs in mg.config.js.
```bash
meet upload
```

## Config
### mg.config.js

mg.config.js is look like:

```
module.exports = {

    // the client server (use for hot reload ) port
    clientPort: '8080',

    // the server(for deployment) port
    server: {
        port: '8090',
    },

    // upload config
    upload: {
        cdn: '//oflt40zxf.bkt.clouddn.com/',
        projectPrefix: 'nodejs-common',

        // if use Ali OSS，set aliconfig a empty object, now it support Ali CLI for upload, 
        // aliconfig: {
        //
        // },
       
        // Qiniu OSS
        qconfig: {
            ACCESS_KEY: 'ei1uOdGpVLliA7kb50sLcV9i4wfYLPwt5v0shU10',
            SECRET_KEY: '-pFFIY-ew35Exyfcd67Sbaw40k15ah3UfZTFWFKF',
            bucket:'hotshots-image',
            origin:'http://cnd.yintage.com'
        },

        // is auto upload after build
        autoUpload: true

    }
};

```

[Ali OSS upload](https://www.npmjs.com/package/meetyou-ali-oss)

## Todo List
1. Better Vue SSR solution
2. Support react, react-ssr

## deployment 
[deploy to server in 30 minutes](http://medium.yintage.com/?p=248)


## License

The MIT License 

