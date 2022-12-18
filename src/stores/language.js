import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
  const language = ref('pt')
  function changeLanguage(lang) {
    language.value = lang;
  }

  return { language, changeLanguage }
})
