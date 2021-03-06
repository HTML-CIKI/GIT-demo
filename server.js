// web 模块
// 主流的web 服务器 Apache、Nginx、IIS
// 使用node 创建Web 服务器
// http 模块 主要用于搭建HTTP服务器和客户端，使用HTTP服务器或客户端功能必须调用http模块
const http = require('http')
const fs = require('fs')
const url = require('url')

// 创建服务器
http.createServer(function (resquest,response) {
  // 解析请求，包括文件名
  let pathname = url.parse(resquest.url).pathname

  // 输出请求的文件名
  console.log(`Request for ` + pathname + `received`)

  // 从文件系统中读取请求的文件内容
  fs.readFile(pathname.substr(1), (err, data) => {
    if (err) {
      console.log(err)
      // HTTP 状态码： 404： NOT FOUND
      // Content Type: text/plain
      response.writeHead(404, {'Content-Type': 'text/html'})
    } else {
      // HTTP 状态码： 200 ： OK
      // Content Type： text/plain
      response.writeHead(200, {'Content-Type': 'text/html'})

      // 响应文件内容
      response.write(data.toString())
    }

    // 发送响应数据
    response.end()
  })
}).listen(8081)

console.log(`Server running at http://127.0.0.1:8081/`)