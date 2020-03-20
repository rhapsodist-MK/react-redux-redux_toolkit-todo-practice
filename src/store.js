import { createStore } from 'redux'

const actions = {
  Add: 'Add',
  Delete: 'Delete'
}

const addTodo = (text) => {
  return {
    type: actions.Add,
    text
  }
}

const deleteTodo = (id) => {
  return {
    type: actions.Delete,
    id: parseInt(id)
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.Add:
      return [{ text: action.text, id: Date.now() }, ...state]
    case actions.Delete:
      return state.filter(toDo => toDo.id !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

export const actionCreators = {
  addTodo, deleteTodo
}
export default store