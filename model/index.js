const { Sequelize, DataTypes } = require('sequelize')

const dbName = 'task'
const dbUserName = 'root'
const passWord = 'Jatin1996'

const sequelize = new Sequelize(dbName, dbUserName, passWord, {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('SQL Database Connected!!')
}).catch((error) => {
    console.log('index authenticate error => ', error)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./User/User')(sequelize, DataTypes)

db.sequelize.sync().then(() => {
    console.log('DataBase Synced!!')
}).catch((error) => {
    console.log('sync error => ', error)
})

module.exports = db