module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'my-secret-token-to-change-in-production',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'LkJ2MfyK5B',
        password: process.env.MYSQL_PASS || 'yFOWgxSgjE',
        database: process.env.MYSQL_DB || 'LkJ2MfyK5B',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || 'localhost',
        port: process.env.CACHE_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-12350.c99.us-east-1-4.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || 12350,
        password: process.env.REDIS_PASS || 'xiPNXh3OVCFBMVUYuRkb8Hn55TFuUrtm',
    },
}