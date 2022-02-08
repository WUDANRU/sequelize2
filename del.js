const { User, Blog } = require('./model');
!(async function() {
    const delBlogRes = await Blog.destroy({
        where: {
            id: 3
        }
    })

    console.log('delBlogRes:', delBlogRes)

    const delUser = await User.destroy({
        where: {
            id: 1
        }
    })
    console.log('delUser:', delUser)
})()