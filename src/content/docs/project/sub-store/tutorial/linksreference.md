---
title: "Sub Store 链接参数说明"
prev:
  link: /project/sub-store/tutorial/proxyapp
  label: Sub Store 代理工具版教程
tableOfContents: false
---

# 链接说明

当使用 `通用链接` 时, 将自动根据请求的 `User-Agent` 来判断应该输出何种订阅数据

ℹ️ `通用链接` 同时也可以用作输出 `哪吒探针` 兼容响应

Loon, Surge(ability=http-client-policy) 可输出节点延迟

例如: 可在探针 App `VPings` 中使用, [参考说明](https://www.notion.so/VPings-8dd9c5beba904617b4e640cd72b1939a)

<details>
<summary>🌟 点击展开截图演示 🌟</summary>
<img width="320" alt="image" src="https://github.com/sub-store-org/Sub-Store/assets/1210282/890571ee-7534-48e5-a2ad-4a9caa88d3fe">
<img width="320" alt="image" src="https://github.com/sub-store-org/Sub-Store/assets/1210282/36e0be1f-601e-46dc-831b-e659cf9f80ad">
</details>

# 使用参数

Sub-Store 生成的订阅地址支持传入 `订阅链接`/`User-Agent`/`节点内容` 等字段, 可复用此订阅的其他设置

例如: 建一个 `name` 为 `sub` 的订阅, 配置好 `节点操作` 等

以后可以自由传入参数 无需在 Sub-Store 前端创建新的配置

简单的例子:

`/download/sub?target=Surge&content=encodeURIComponent编码过的本地节点`

`/download/sub?target=Surge&ua=encodeURIComponent编码过的User-Agent&url=encodeURIComponent编码过的订阅链接`

> ⚠️ 参数需要 encodeURIComponent 编码

| 参数 | 示例 | 说明 |
|---|---|---|
| `target` | `Surge` | 目标. 当为 `SurgeMac` 时, 额外支持 `ShadowsocksR` 和 `External Proxy Program`(不设置 `target` 时, 使用 macOS 版 Surge 将自动识别) 更多说明 [请查看此消息](https://t.me/zhetengsha/1081)|
| `url` | `http://a.com` | 远程订阅内容(格式和参数参考前端输入框旁的说明) |
| `content` | `a = socks5, 127.0.0.1, 1080` | 本地订阅内容(格式和参数参考前端输入框旁的说明) |
| `ua` | `Surge iOS/3004` | 请求时使用的 `User-Agent` |
| `mergeSources` | `localFirst`/`remoteFirst` | 按顺序合并本地和远程订阅 |
| `includeUnsupportedProxy` | `true` | 包含官方/商店版不支持的协议<br/>Clash 系: 返回全部节点(否则将验证支持的协议/版本/加密方式等)<br/>sing-box: +`ShadowsocksR`<br/>Surge: +`去除 HTTP 传输层(不一定能通, 由服务端配置确定)` 更多说明 [请查看此消息](https://t.me/zhetengsha/1455)<br/>+`全部是 WireGuard 节点的订阅, 支持输出为 Surge 模块` 更多说明 [请查看此消息](https://t.me/zhetengsha/1144) |
| `ignoreFailedRemoteSub` | `true` | 忽略失败的远程文件<br/>开启后 依赖的远程订阅出错时 不会报错了 需要自行查看日志 |
| `produceType` | `internal` | 一般不用传, 用来获取结构化的数据 |