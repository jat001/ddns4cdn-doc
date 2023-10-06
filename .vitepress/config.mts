import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { zhConfig } from './zh'

export default defineConfig({
  srcDir: './src',
  outDir: './dist',
  cacheDir: './.cache',

  title: 'ddns4cdn',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jat001/ddns4cdn' },
    ],
    editLink: {
      pattern: 'https://github.com/jat001/ddns4cdn-docs/edit/main/src/:path',
    },
  },

  locales: {
    zh: {
      label: '中文',
      ...zhConfig,
    },
    en: {
      label: 'English',
      ...enConfig,
    },
  },
})
