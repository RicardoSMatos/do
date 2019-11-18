import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveTask: ['task'],
  deleteTask: ['id'],
  finishTask: ['id'],
  clear: null
})

export const TasksTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  tasks: []
})

/* ------------- Selectors ------------- */

export const GithubSelectors = {
  selectAvatar: state => state.github.avatar
}

/* ------------- Reducers ------------- */

export const saveTask = (state, { task }) => {

  const tempTasks = Immutable.asMutable(state.tasks);
  tempTasks.push(task);

  return { tasks: tempTasks };
}
  
export const deleteTask = (state, { id }) => {
  let tempTasks = Immutable.asMutable(state.tasks)
  let _index = null;
  tempTasks.forEach((task, index) => {
    if(task.id === id) {
      _index = index
    }
  })

  tempTasks.splice(_index, 1)

  return { tasks: tempTasks }
}

export const finishTask = (state, { id }) => {
  let tempTasks = Immutable.asMutable(state.tasks)
  
  tempTasks.forEach((task, index) => {
    if(task.id === id) {
      task.finished = true
    }
  })

  return { tasks: tempTasks }
}

export const clear = state => ({
  tasks: []
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_TASK]: saveTask,
  [Types.DELETE_TASK]: deleteTask,
  [Types.FINISH_TASK]: finishTask,
  [Types.CLEAR]: clear
})
