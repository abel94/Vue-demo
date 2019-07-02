module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://webservice.juanpi.com',
                changeOrigin: true
            }
        }
    }
}