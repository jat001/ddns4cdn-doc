import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
  outDir: "./dist",
  cacheDir: "./.cache",
  title: "ddns4cdn",
  description: "Automatically update the IP address of origin server for CDN.",

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "快速开始",
        items: [{ text: "配置", link: "/config" }],
      },
      {
        text: "服务",
        items: [
          {
            text: "Cloudflare",
            link: "/services/cloudflare",
          },
          {
            text: "腾讯云 ECDN",
            link: "/services/tencent",
          },
          {
            text: "阿里云 DCDN",
            link: "/services/alibaba",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jat001/ddns4cdn" },
    ],
  },
});
