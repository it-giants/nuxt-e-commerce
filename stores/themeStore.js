import { defineStore } from 'pinia';

export const useThemeStore = defineStore("theme", () => {
  const isDark = ref(false)

  function setDark(value) {
    isDark.value = value
    if (process.client) {
      localStorage.setItem('isDark', value)
      document.documentElement.classList.toggle('dark', value)
    }
  }

  function toggleDark() {
    setDark(!isDark.value)
  }

  return { isDark, toggleDark, setDark }
})