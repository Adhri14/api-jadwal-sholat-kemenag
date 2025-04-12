module.exports = {
    apps: [
        {
            name: 'api-jadwal-sholat-kemenag',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
                PORT: 3000
            }
        }
    ]
};
