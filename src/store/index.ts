import { createStore } from 'vuex'

export interface IState{
  totalSquare: number,
  floorsCount: number,
  firsFloorHeight: number,
  secondFloorHeight: number,
  material: string,
  totalWindowsSquare: number,
  totalInnerDoors: number,
  showPopup: {
    show: boolean,
    componentIndx: number
  },

}

export default createStore<IState>({
  state: {
    totalSquare: 120,
    floorsCount: 1,
    firsFloorHeight: 3,
    secondFloorHeight: 3,
    material: 'Кирпич',
    totalWindowsSquare: 12,
    totalInnerDoors: 5,
    showPopup: {
      show: false,
      componentIndx: 0
    },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
