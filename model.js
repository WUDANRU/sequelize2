const seq = require('./seq')
const Sequelize = require('sequelize')

// 创建user模型
const User = seq.define('user', {
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickName: {
        type: Sequelize.STRING,
        comment: '昵称'
    }
});

const Blog = seq.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// 方式1， 外键关联，belongsTo属于，外键Blog.userId会被添加到源模型User上
Blog.belongsTo(User, {
    foreignKey: 'userId'
})

// 方式2，Blog不显式写userId时，使用 Blog.belongsTo(User)，弊端是自动关联，不如显式配置那么直观

// 方式3，hasMany 拥有多个，外键User.id会被添加到目标模型Blog.userId上。与方式1相反
User.hasMany(Blog, {
    foreignKey: 'userId'
})

module.exports = {
    User,
    Blog
}