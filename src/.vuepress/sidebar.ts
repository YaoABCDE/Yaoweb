import { sidebar } from "vuepress-theme-hope";

//主要功能与配置演示
export default sidebar({
  "/": [
    "",
    {
      text: "01-如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "02-文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "03-幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
    "intro",//04介绍页
  ],

});
