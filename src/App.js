import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import uuid from 'uuid'
import axios from 'axios'
import About from './components/pages/About'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  // React lifecycle method
  // To make initial requests (GET)
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(
        response => this.setState(
          {
            todos: response.data
          }
        )
      )
  }

  // Toggle Complete
  markComplete = (id) => {
    // console.log('id', id)
    this.setState(
      {
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    ) 
  }

  // Add Todo (POST)
  addTodo = (title) => {
    axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title,
        completed: false
      }
    ).then(
      response => {
        this.setState(
          {
            todos: [...this.state.todos, response.data]
          }
        )
      }
    )
  }
  // Delete Todo (DELETE)
  delTodo = (id) => {
    // console.log('id', id)
    axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${ id }`
    ).then(
      response => {
        this.setState(
          {
            todos: [...this.state.todos.filter(
              todo => todo.id !== id
            )]
          }
        )
      }
    )
  }

  render() {
    // console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route 
              exact
              path="/" 
              render={ props => (
                <React.Fragment>
                  <AddTodo addTodo={ this.addTodo } />
                  <Todos 
                    todos={ this.state.todos } 
                    markComplete={ this.markComplete } 
                    delTodo={ this.delTodo }
                  />
                </React.Fragment>
              ) } 
            />
            <Route 
              path="/about"
              component={ About }/>
          </div>
        </div>
      </Router>
    )
  }

}

export default App;
