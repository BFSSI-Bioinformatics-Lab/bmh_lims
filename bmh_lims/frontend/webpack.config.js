const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'images/[hash]-[name].[ext]',
                    },
                  },
                ],
              },
              {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
              }
        ]
    },
    resolve: {
      alias: {
        icons: path.resolve(__dirname, 'src/assets'),
        pages: path.resolve(__dirname, 'src/pages'),
        components: path.resolve(__dirname, 'src/components')
      }
    }
};
