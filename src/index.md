---
layout: home

features:
  - title: 中文
    link: /zh/
  - title: English
    link: /en/
---

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vitepress'

onBeforeMount(() => {
  const locale = localStorage.getItem('locale')
  if (locale) {
    useRouter().go(`/${locale}/`)
  }
})
</script>
