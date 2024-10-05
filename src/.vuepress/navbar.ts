import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  //标题栏3
  {
    text: "标题栏3(博文)",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
//标题栏4
  {
    text: "标题栏4(doc展示)",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
//标题栏5
  {
    text: "标题栏5(小米)",
    icon: "book",
    link: "https://mi.com",
  },
]);
