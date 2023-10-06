import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'zh-CN',
  description: '自动更新 CDN 源站 IP 地址。',

  themeConfig: {
    nav: [{ text: '首页', link: '/zh/' }],

    sidebar: [
      {
        text: '指南',
        items: [{ text: '配置', link: '/zh/guide/config' }],
      },
      {
        text: '服务',
        items: [
          {
            text: 'Cloudflare',
            link: '/zh/services/cloudflare',
          },
          {
            text: '腾讯云 ECDN',
            link: '/zh/services/tencent',
          },
          {
            text: '阿里云 DCDN',
            link: '/zh/services/alibaba',
          },
        ],
      },
    ],
  },
}
