import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { fileURLToPath } from "url";

let __filename = fileURLToPath(import.meta.url);

let __dirname = path.dirname(__filename);

export default {
 
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js",
      },
      devServer: {
        port: 3010,
        liveReload: true,
        historyApiFallback: true,
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'svg-url-loader',
                options: {
                  limit: 10000,
                },
              },
            ],
          },
        ],
      },
      plugins: [new MiniCssExtractPlugin()],
}