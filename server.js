const Gun = require('gun')
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end('NexaChat Relay Running')
})

server.listen(process.env.PORT || 8765, () => {
  console.log('NexaChat relay running on port', process.env.PORT || 8765)
})

Gun({ web: server })
