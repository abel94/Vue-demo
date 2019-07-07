module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://webservice.juanpi.com',
                changeOrigin: true
            },
            '/category': {
                target: 'https://mapi.juanpi.com',
                changeOrigin: true
            },
            '/ptgoods': {
                target: 'https://detail-api.juanpi.com',
                changeOrigin: true
            }
        },
    }
}