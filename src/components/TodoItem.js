import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    // console.log(this.props.todo)
    return (
      <div>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

export default TodoItem
