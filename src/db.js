const mongoose = require('mongoose')
mongoose.connect('mongodb://long:123qwe@127.0.0.1:50003/Article', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('连接成功')
})

// 有账号密码
// mongoose.connect('mongodb://Test:Test@localhost/db1', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

module.exports = mongoose