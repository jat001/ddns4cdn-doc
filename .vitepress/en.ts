import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'en-US',
  description: 'Automatically update the IP address of origin server for CDN.',

  themeConfig: {
    nav: [{ text: 'Home', link: '/en/' }],

    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Config', link: '/en/guide/config' }],
      },
      {
        text: 'Services',
        items: [
          {
            text: 'Cloudflare',
            link: '/en/services/cloudflare',
          },
          {
            text: 'Tencent Cloud ECDN',
            link: '/en/services/tencent',
          },
          {
            text: 'Alibaba Cloud DCDN',
            link: '/en/services/alibaba',
          },
        ],
      },
    ],
  },
}
