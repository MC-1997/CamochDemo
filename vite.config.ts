import { defineConfig } from 'vite'
import { resolve } from "path"; // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue'

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[vue()], // 配置需要使用的插件列表，这里将vue添加进去
  // 配置文件别名 vite1.0是/@/  2.0改为/@
  // 这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件
  resolve: {
    alias: {
      "/@": pathResolve("src"),
    }
  },
  // 强制预构建插件包
  optimizeDeps: {
    include: ['axios'],
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小

  },
  // 配置前端服务地址和端口
  server: {
    host: '0.0.0.0',
    port: 7060,
    // 是否开启 https
    https: false,
    open: false, //自动打开
    base: "./", //生产环境路径
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/api-camoch': {
        // 后台地址
        target: 'http://127.0.0.1:9280/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api-camoch/, 'api-camoch')
      }
    }
  },
})
