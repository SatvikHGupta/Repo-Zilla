# Uncle 小说

一个桌面端阅读器应用，支持 MacOS/Windows

## 贡献代码

### 本地启动

准备环境:

- `jdk` 至少需要 JDK11 版本。
- `npm install -g sass` 安装 sass，本项目使用 sass 将 scss 编译为 css。
- `sqlite3`，非必须，如果想重建 sqlite 数据库则需要安装。

然后直接运行 :app:runApp 任务即可。

```shell
./graldew :app:runApp
```

### 打包

```shell
# window 64 位包
./gradlew :app:packageWin64

# window 32 位包
./gradlew :app:packageWin32

# macos 包，如果要打 arm64 的包需要配置 arm64 的 jdk
./gradlew :app:packageMac
```

## Star History

![Star History Chart](https://api.star-history.com/svg?repos=uncle-novel/uncle-novel&type=Date)

