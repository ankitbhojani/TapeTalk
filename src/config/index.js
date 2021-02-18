const dotenv = require('dotenv')
if (!dotenv) {
    throw new Error('Unable to use dot env lib');
}
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
    // This error should crash whole process
    throw new Error("⚠️ Couldn't find .env file ⚠️");
}

module.exports = {
    /**
     * Prod or development server
     */
    ENV: process.env.ENV,

    NAME: process.env.NAME,
    VERSION: process.env.VERSION,

    /* Public Path */
    PUBLIC_PATH: process.env.PUBLIC_PATH,

    /* Images Path */
    BASE_URL_IMAGES: process.env.BASE_URL_IMAGES,
    BASE_URL_IMAGES_MAIL: process.env.BASE_URL_IMAGES_MAIL,

    /**
     * Your favorite port
     */
    port: parseInt(process.env.API_PORT, 10),
    api_url: process.env.API_URL,
    server_url: process.env.SERVER_URL,

    /**
     * That long string from mlab
     */
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: parseInt(process.env.DB_PORT, 10),

    /* mongodb credentials */
    MONGO_HOST: process.env.MONGO_HOST,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_URL: process.env.MONGO_URL,
    REDIS_KEY: process.env.REDIS_KEY,
    /**
     * Your secret sauce
     */
    jwtSecret: process.env.JWT_SECRET,
    jwtetl: process.env.JWT_TTL,
    aesSecretkey: 'aes secret key TAPETALK',

    /**
     * Email Credentials
     */
    smtp_email_host: process.env.SMTP_EMAIL_HOST,
    smtp_email_port: parseInt(process.env.SMTP_EMAIL_PORT, 10),
    smtp_email_from: process.env.SMTP_EMAIL_FROM,
    smtp_email_from_name: process.env.SMTP_EMAIL_SENDER,
    smtp_email_username: process.env.SMTP_EMAIL_USER,
    smtp_email_password: process.env.SMTP_EMAIL_PASSWORD,
    receiver_email: process.env.RECEIVER_EMAIL || 'ankitbhojani007@gmail.com',

    /**
     * FCM keys
     */
    FCM_KEY: process.env.FCM_KEY,

    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
        path: process.env.LOG_PATH || './',
    },
    /**
     * API configs
     */
    api: {
        prefix: process.env.COMMON_API,
    },

    //Check Middleware
    poller_key: process.env.POLLER_KEY,
};
