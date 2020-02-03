module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'my-secret-token-to-change-in-production',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'LkJ2MfyK5B',
        password: process.env.MYSQL_PASS || 'yFOWgxSgjE',
        database: process.env.MYSQL_DB || 'LkJ2MfyK5B',
    }
}