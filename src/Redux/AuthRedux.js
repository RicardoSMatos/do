import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { showMessage } from 'react-native-flash-message'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  cadastrar: ['email', 'senha'],
  login: ['email', 'senha'],
  finishTask: ['id']
})

export const TasksTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  email: null,
  senha: null,
  logged: false,
  error: '',
})

/* ------------- Selectors ------------- */

export const GithubSelectors = {
  selectAvatar: state => state.github.avatar
}

/* ------------- Reducers ------------- */

export const cadastrar = (state, { email, senha }) => {

  return { email, senha };
}

export const login = (state, { email, senha }) => {
  if(!email) {

    return { error: 'Não ha usuários cadastrados. Cadastre seus dados e tente novamente'}
  }
  
  if(state.email !== email || state.senha !== senha) {

    return { error: 'Dados de acesso errados. Tente novamente'}
  } else {
    return { logged: true, error: '' }
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CADASTRAR]: cadastrar,
  [Types.LOGIN]: login,
  // [Types.FINISH_TASK]: finishTask,
})
