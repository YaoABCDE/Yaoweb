<!-- *****************************************一-命令行**************************************** -->
<!--
*******************01-npm命令
npm init vuepress-theme-hope@latest Yaomi //创建项目Yaomi
npm run build //构建项目
npm init //项目初始化
npm install //安装依赖
code . //通过VS code 打开该项目

*******************02-更改文档
更改目录：Github/deploy_docs.yml
        env:
          GITHUB_TOKEN: ${{secrets.Yao_ACCESS_TOKEN}} //Yao：项目密钥
        with:
          # 部署文档
          branch: Yao_pages //Yao：开源项目分支名 注意大小写
          folder: src/.vuepress/dist
更改目录：Src/config.ts
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Yaoweb/", //Yao：开源项目名 注意大小写

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",
  theme,
});

*******************03-git上传命令：
注意事项：先在游览器上登录GitHub，前期先从云端同步到本地，建议使用命令行同步项目的第一次
git config user.name Yaoabcde //绑定GitHub用户名
git config user.email 1964877312@qq.com //绑定GitHub账号
cd Yaomi  										#进入项目目录
git init       								#初始化 Git 仓库（如果还没有）
#git remote add origin https://github.com/your-username/Yaomi.git  	#添加远程仓库
git remote add origin https://github.com/YaoABCDE/Yaoweb.git 				#个人远程仓库
git add .      								#添加所有文件到暂存区
git commit -m "first demo"  	#提交文件
git branch -M main  					#将当前分支重命名为 main（如果还没有命名为 main）
git push -u origin main  			#推送到远程仓库的 main 分支

-->

<!-- *****************************************二-依托环境**************************************** -->
<!--
主题：VuePress 2.0
框架：blog
软件：Vscode
命令：NPM

-->
