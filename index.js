const seq = require('./seq')

require('./model')


// 连接
seq.authenticate().then(() => {
    console.log('ok')
}).catch(() => {
    console.log('连接错误')
})

// 同步模型到数据库
seq.sync({ force: true }).then(() => {
    console.log('sync ok')
    process.exit()
})