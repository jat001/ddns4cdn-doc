import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, watchEffect } from 'vue'

export default {
  ...DefaultTheme,

  setup() {
    onMounted(() => {
      const { localeIndex } = useData()

      watchEffect(async () => {
        if (localeIndex.value && localeIndex.value !== 'root') {
          localStorage.setItem('locale', localeIndex.value)
        }
      })
    })
  },
}
