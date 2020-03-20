import { createStore } from 'redux'
import { createAction, createReducer } from "@reduxjs/toolkit"

const addTodo = createAction("Add")
const deleteTodo = createAction("Delete")


// createReducer을 사용하면 state를 mutate 해도 된다
// 단! mutate를 할때는 return을 하면 안된다
const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() })
  },
  [deleteTodo]: (state, action) => {
    return state.filter(toDo => toDo.id !== action.payload)
  }
})

const store = createStore(reducer)

export const actionCreators = {
  addTodo, deleteTodo
}
export default store