/**
 * 数据库连接
 */
const mongoose = require('mongoose')
const config = require('./index')
const log4js = require('./../utils/log4j')

mongoose.connect(config.URL,{
    // 通过将 useNewUrlParser 设置为 true, 避免 "当前 URL 字符串解析器已弃用" 警告
    useNewUrlParser: true,
    // 服务器发现和监视引擎已弃用，将在将来的版本中删除。要使用新的服务器发现和监视引擎，请将选项 {useUnifiedTopology:true} 传递给 mongoclient 构造函数
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error',()=>{
    log4js.error('***数据库连接失败***')
})

db.on('open',()=>{
    log4js.info('***数据库连接成功***')
})