import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Yaoweb/",

  lang: "zh-CN",
  title: "Yao", //标题展示 右上角显示
  description: "就做不一样", //标题展示

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
