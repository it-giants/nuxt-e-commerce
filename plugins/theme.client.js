// plugins/theme.client.ts
import { useThemeStore } from '~/stores/themeStore'

export default defineNuxtPlugin(() => {
  const themeStore = useThemeStore()
  const saved = localStorage.getItem('isDark')

  // Sync localStorage -> store -> DOM
  const isDark = saved === 'true'
  themeStore.setDark(isDark)
})