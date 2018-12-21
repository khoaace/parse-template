'use strict';

const parseServerOptions = require('./parse-server');

const parseDashboardOption = {
    mountPath: process.env.DASHBOARD_MOUNT || '/dashboard',
    apps: [
        {
            serverURL: process.env.serverURL || 'http://localhost:3000/api',
            appId: parseServerOptions.appId,
            masterKey: parseServerOptions.masterKey,
            javascriptKey: parseServerOptions.javascriptKey,
            restKey: parseServerOptions.restAPIKey,
            clientKey: parseServerOptions.clientKey,
            appName: process.env.APP_NAME || 'Template',
            appNameForURL: 'template'
        }
    ],
    users: [
        {
            user: 'operator',
            pass: '$2y$12$5SZ5sFwTGgs/nJvc/w82vuHIP8OAkXZ1ybajOyIawRnSdBoVvz.Si' // 123456
        }
    ],
    useEncryptedPasswords: true // @link: https://bcrypt-generator.com
}

module.exports = parseDashboardOption;