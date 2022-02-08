const { User, Blog } = require('./model')
    // 创建
    !(async function() {
        const updateRes = await User.update({
            nickName: '张三'
        }, {
            where: {
                userName: 'zj'
            }
        })

        console.log('updateRes:', updateRes[0] > 0)
    })()