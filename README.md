# Request Library 500 Status Test

这个项目用于测试 Node.js 中 `request` 库在处理 HTTP 500 状态码响应时的具体行为。

## 测试目的

验证以下场景下 `request` 库的行为：
- 服务器返回 500 状态码
- 响应中包含错误信息文本
- 响应中不包含错误信息文本
- 观察 `request` 回调函数中 `error` 和 `response` 对象的具体值

## 项目结构 

```
.
├── src/
│ ├── server.ts # Express 服务器，返回500状态码
│ └── check.ts # 使用request库发起请求的测试脚本
├── package.json
└── tsconfig.json
```

## 使用方法

1. 安装依赖:

```bash
npm install
```

2. 启动测试服务器:

```bash
npm run server
```

3. 在新的终端窗口运行测试:

```bash
npm run check
```

## 预期结果

运行测试后，你将看到:
- 对于 `/error-with-text` 路由:
  - `error` 参数为 `null`（因为 request 库不会将 HTTP 500 视为错误）
  - `response` 对象包含完整响应信息，其中 `statusCode` 为 500
  - `body` 包含服务器返回的错误消息文本："This is a 500 error message"
- 对于 `/error-no-text` 路由:
  - `error` 参数为 `null`
  - `response` 对象包含完整响应信息，其中 `statusCode` 为 500
  - `body` 为空字符串

## 注意事项

`request` 库只在发生网络错误或其他底层错误时才会设置 `error` 参数。HTTP 错误状态码（如 500）不会触发 error，而是通过 `response.statusCode` 来表示。