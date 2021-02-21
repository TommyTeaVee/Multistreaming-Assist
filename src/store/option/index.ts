import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { OptionStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const optionModule: Module<OptionStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default optionModule
