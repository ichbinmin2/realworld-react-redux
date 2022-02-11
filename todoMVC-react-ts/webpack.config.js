const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // 파일을 찾기 시작하는 입구
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    // import from 뒤에 확장자를 생략했을 때, 어떤 확장자가 올 수 있는지 알려줌
    modules: [path.join(__dirname, "src"), "node_modules"], // 절대경로 설정
  },
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader", // js와 jsx 파일을 가져오는 loader
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 번들이 만들어질 폴더 경로
    filename: "bundle.js", // 만들어질 번들 파일의 이름
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    host: "localhost",
    port: 3000,
  },
};
