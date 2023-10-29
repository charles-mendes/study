import { defineStore } from 'pinia'

interface Controller {
  drawer: boolean
}

export const useControllerStore = defineStore('controller', {
  state: (): Controller => {
    return {
      drawer: true
    }
  },
})