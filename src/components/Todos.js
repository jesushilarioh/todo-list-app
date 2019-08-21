import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
  render() {
    // console.log(this.props.todos)
    // return this.props.todos.map((todo, i) => (
    //   <TodoItem key={ i } todo={ todo } />
    // ))
    // OR
    return this.props.todos.map(todo => (
      <TodoItem 
        key={ todo.id } 
        todo={ todo } 
        markComplete={ this.props.markComplete }
        delTodo={ this.props.delTodo }
      />
    ))
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos