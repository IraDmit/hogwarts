import { defineStore } from 'pinia'

export const useCharactersStore = defineStore({
  id: 'characters',
  state: () => ({
    charactersList: [],
    teachersList: []
  }),
  getters: {
    getCharacters: ({ charactersList }) => {
      return charactersList
    },
    // getTenTeachers: ({ charactersList }) => {
    //   let count = 0
    //   const tenCharacters = []
    //   for (let index = 0; index < charactersList.length; index++) {
    //     if (count >= 10) break
    //     if (charactersList[index].image) tenCharacters.push(charactersList[index])
    //     count++
    //   }
    //   return tenCharacters
    // },
    getTeachers({ teachersList }) {
      return teachersList
    },
    getStudents({ charactersList }) {
      return charactersList.filter((character) => character.hogwartsStudent)
    }
  },
  actions: {
    async fetchCharacters() {
      const data = await fetch('https://hp-api.onrender.com/api/characters', {
        method: 'GET'
      }).then((responce) => responce.json())
      this.charactersList = data
    },
    async fetchTeachers() {
      const data = await fetch('https://hp-api.onrender.com/api/characters/staff', {
        method: 'GET'
      }).then((responce) => responce.json())
      this.teachersList = data
    }
  }
})
