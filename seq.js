const Sequelize = require('sequelize')
const config = {
    host: 'localhost',
    dialect: 'mysql',
    //   dialectOptions: {
    //     charset: "utf8mb4",
    //     collate: "utf8mb4_unicode_ci"
    //  },
    //  define: {
    //   underscored: true,
    //   charset:'utf8mb4'
    // }
}
const seq = new Sequelize('ormmodel', 'root', 'root', config)

module.exports = seq