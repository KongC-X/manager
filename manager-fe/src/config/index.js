/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/e8dda6a9b2259a2d724b3c1a677d06fd/api'
    },
    test:{
        baseApi:'//test.futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/e8dda6a9b2259a2d724b3c1a677d06fd/api'
    },
    prod:{
        baseApi:'//futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/e8dda6a9b2259a2d724b3c1a677d06fd/api'
    }
}
export default {
    env,
    mock:false,
    namespace:'manager',
    ...EnvConfig[env]
}