# Koa Vue Fullstack Boilerplate
##### 🎉🎉🎉 Upgrade Webpack to v5!
<sup> Project based on Webpack4 is in [Releases](https://github.com/yunhan0/koa-vue-fullstack/releases). </sup>

### Preface
##### Vue.js, Koa.js, Node.js, and MongoDB fullstack lightweight example application. Authentication, CRUD, and access control included.
This project aims to build a small but structured full-stack application, so it would be relatively clear for a programmer/beginner to understand how to build a website from scratch.

### Demo:
Click [here](http://yunhan.li/koa-vue-fullstack) to see demo website.<br>
<pre>
email: admin@example.com
password: 123456
</pre>

### Environment:
- Server
    - [Koa](http://koajs.com/)
    - Koa Router, Koa Cors, Koa Bodyparser
    - Mongoose
    - Node ~~v8.9.4~~ ~~v10.12.0~~ v11.0.0
- Client
    - [Vue](https://vuejs.org/)
    - [iView](https://www.iviewui.com/)
    - [Axios](https://github.com/axios/axios) (HTTP Client Library)
    - ~~Webpack 3~~ ~~Webpack 4~~ Webpack 5
    - WebpackDevServer (Development mode only)

### Architecture

    ├─client               # frontend folder
    │  ├─src               # frontend src
    │  │  ├─api
    │  │  ├─router
    │  │  ├─styles
    │  │  ├─components
    │  │  ├─store          # state management
    │  │  │  └─modules
    │  │  └─view           # app pages
    │  │     └─auth
    │  └─static            # static folder
    |
    └─server               # server folder
       └─src               # server src
          ├─api            # server api list
          │  ├─auth        # completely token-based authentication
          │  ├─thing
          │  └─user
          ├─config         # server configurations
          │  ├─index       # default server port, mongo uri, etc settings
          │  ├─security    # security settins
          │  └─seed        # populate database with sample data on server start
          ├─entry.js       # entry file for environment setup
          ├─main.js        # main file after entry
          └─routes.js      # router

### Run through Docker
```bash
    cd server # You can boost the server by using Docker
    docker-compose up
    # Open a new tab
    cd client
    npm install
    npm start
```

### Setup Locally:
- Steps:
The server and client are completely seperated in this project, so go to each client and server folder and run:

```bash
    cd client
    npm install
    npm start # Running dev client
    # Open a new tab
    mongod    # Boost Mongo DB
    # Open a new tab
    cd server
    # CREATE a .env file under server folder, and copy and paste the contents of .env.default file into this .env, and assign values
    touch .env
    npm install
    npm start # Running dev server
```

- Others:
```bash
npm run build      # Running production mode
npm run eslint     # Check your coding style
npm run eslint-fix # Use auto ESLint fix
```
