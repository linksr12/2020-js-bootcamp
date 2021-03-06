const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = () => {
    return merge(commonConfig, {
        mode: 'production',
        devtool: 'source-map'
    })
}