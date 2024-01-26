import { defineStore } from 'pinia'

export const usePreloaderStore = defineStore({
  id: 'preloader',
  state: () => ({
    isPreloader: undefined
  })
})
