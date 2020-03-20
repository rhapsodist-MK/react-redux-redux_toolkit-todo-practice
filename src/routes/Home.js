import React, { useState } from 'react'
import { connect } from 'react-redux'

import { actionCreators } from '../store'

import ToDo from '../components/ToDo'

function Home({toDos, addTodo}) {
  const [text, setText] = useState('')
  function onChange(e) {
    setText(e.target.value)
  }
  function onSubmit(e) {
    e.preventDefault()
    setText("")
    addTodo(text)
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>{toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}</ul>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  return { toDos: state }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)