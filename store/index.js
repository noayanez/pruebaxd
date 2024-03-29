

export const state = () => ({
  fromForm: false,
  generalInformation: {},
  dataView:{},
  dataService:'',
  language:'es'
})

export const mutations = {
  setFromForm (state, value) {
    state.fromForm = value
  },
  SET_GENERAL_INFORMATION(state, data) {
    state.generalInformation = data
  },
  SET_DATA_VIEW(state,data){
    state.dataView = data
  },
  SET_DATA_SERVICES(state, data){
    state.dataService = data
  }
  
}

export const getters = {
  getView(state){
    for (var i = 0; i < state.dataView.length; i++) {
      if (state.dataView[i].name === 'Landing') {
        return state.language === 'es'
          ? state.dataView[i].langs[0]
          : state.dataView[i].langs[1]
      }
    }
  },
  getIntoService(state){
    return state.dataService
  },
  getInfoGeneral(state){
    return state.generalInformation
  }
}
  