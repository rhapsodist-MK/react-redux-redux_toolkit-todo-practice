import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit"


// createSlice는 reducer, action, initial 등 모두 제공해줌
const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() })
    },
    remove: (state, action) => {
      return state.filter(toDo => toDo.id !== action.payload)
    }
  }
})

// configureStore을 사용하면 redux dev tool을 사용가능하다
const store = configureStore({reducer: toDos.reducer})

export const { add, remove } = toDos.actions

export default store