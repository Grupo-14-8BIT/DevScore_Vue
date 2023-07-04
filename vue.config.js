const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    devServer: {
        port: 3001,
        proxy: {
            '/api': {
                target: 'http://localhost:8081', // Replace with your backend server URL
                changeOrigin: true,
            },
        },
    },
});