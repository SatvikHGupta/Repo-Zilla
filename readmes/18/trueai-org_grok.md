# Grok 3 地球上最聪明的AI

使用 Deno 免费代理马斯克 Grok3，免登录，国内直连，不限地区/不限网络/不限设备，打开即用。

出道即巅峰，Grok3 是首个突破1400分的模型，并且在所有类别中排名第一。<https://lmarena.ai/?leaderboard>

大家好！今天要带你们解锁地表最强AI——Grok 3！马斯克亲封的 "最聪明AI"


`#马斯克AI革命` `#Grok3性能屠榜` `#超越DeepSeekR1` `#20万GPU算力碾压` `#地表最强AI`

1. 算力碾压：
    - 20万块H100 GPU训练，算力是DeepSeek R1的50倍（DeepSeek R1仅用2048块H800 GPU）。
    - 训练耗时2亿GPU小时，是Grok 2的10倍，硬件规模全球第一。
2. 性能屠榜：
    - 数学能力：AIME'24测试96分（DeepSeek V3仅39分）。
    - 编程效率：LCB测试57分，15分钟生成《星际俄罗斯方块》完整代码。
    - 推理能力：Chatbot Arena ELO评分1400+，全球首个突破此分数的模型。
3. 独家功能碾压：
    - DeepSearch：实时联网搜索+多源验证（对比DeepSeek R1依赖中文自媒体，Grok 3抓取GitHub、arXiv等权威数据，例：分析特斯拉股价趋势）。
    - Think模式：思维链长度是DeepSeek R1的10倍，推理速度反而更快，复杂问题分步推理（如生成3D行星轨道代码）。
    - 多模态处理：同步解析文本+图像（例：分析医学CT报告）

## 分享

- [Midjourney API](https://github.com/trueai-org/midjourney-proxy)：市面上最强大，完全免费开源的免费绘图平台。
- [MDrive](https://github.com/trueai-org/mdrive)：阿里云盘官方 API 授权的自动同步和备份工具，支持挂载到本地磁盘。
- [Gemini](https://github.com/trueai-org/gemini)：使用 Deno 免费代理 Google Gemini，国内直连，不限地区/网络环境，打开即用。

## Deno 部署

> Bilibili 视频教程：<https://www.bilibili.com/video/BV1DDA3eEExa/>

1. 点击 [Fork](https://github.com/trueai-org/grok/fork) 本项目（万分感谢帮助点个 `Star`）
2. 登录/注册 X 账号 <https://grok.com>（用 Gmail 或 Outlook 邮箱登录 X 官网）
3. 点击创建 Deno 项目 https://dash.deno.com/new_project
4. 选择此项目，填写项目名字（分配 Deno 域名）
5. 部署 Entrypoint 填写 `src/deno_index.ts` 其他字段留空 
6. 点击 **Deploy Project**
7. 部署成功后获得 Deno 域名，打开刚刚部署项目 -> `Settings` -> `Environment Variables` -> 添加 cookie 到环境变量，完成后就可以在任意地点/任意设备访问 Grok3 了。

> 如果需要配置账号密码，则配置 Deno 环境变量 AUTH_USERNAME 和 AUTH_PASSWORD。

## Deno 调试

Windows 安装 Deno:
> irm https://deno.land/install.ps1 | iex

Mac/Linux 安装 Deno:
> curl -fsSL https://deno.land/install.sh | sh

启动项目：

> cd grok

> deno run --allow-env --allow-net --allow-read src/deno_index.ts

## 其他说明

1. 免费体验，Grork3 每日有频率限制（Grok2 不限次数）
1. 科学上网：连接美国/新加坡节点（推荐使用V2Ray协议加速）
2. 注册 X 账号：用 Gmail 或 Outlook 邮箱登录 X 官网
3. 访问入口：点击 x.com Grok 页面或 grok.com，无需订阅即可使用基础功能
4. 付费解锁全功能（Premium+订阅，申请虚拟卡等方式）
