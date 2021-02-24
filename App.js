import React, { Component } from 'react';
import './App.css'
import TodoItem from './components/TodoItem.js'
import styled from 'styled-components'

const Container = styled.div`
margin: 0 auto;
width: 50%;
max-width:600px;
padding: 14px;
border-radius: 13px;
margin-top: 13px;
text-align: left;
`
const Header = styled.h1`
color: rgb(100, 50, 160);
margin-left: 60px;
`

const Button = styled.button`
font-size: 1.7 em;
height: 32px;
width: 100px;
background-color: #232632;
color: white;
border-radius: 10px;
justify-conetent: center;
align-items: center;
float: right;
`

const TextInput = styled.input`
padding: 5px;
font-size: .7em;
background-color: #232632;
color: white;
margin-right: 7px;
width: 98%;
height: 30px;
border: 0px;
-webkit-appearance: none;
border-radius: 10px;
`

const NewTodoForm = ({onChange, draft, onSumbit}) => (
  <div>
    <TextInput type='text' onChange={onChange} value={draft} />
    <Button onClick={onSumbit}>Dodaj</Button>
  </div>
)

const DestroyButton = styled.button`

border-radius: 10px;
background: #232632;
padding: 5px;
color: #fff;
margin-left: 500px;
`

class TodoList extends Component {
  componentDidMount = () => { 
    fetch('https://konrad.internship.animativ.dev')
    .then(response => response.json())
    .then(json => this.setState({tasks: json}))
  }
  
  static defaultProps = {
    tasks: [],
    title: 'Todos'
  }

    state = {
      tasks: this.props.tasks,
      draft: ''
    }
  
    updateDraft = event => {
      this.setState({draft: event.target.value})
    }
  
    addTodo = () => {
      const { tasks, draft } = this.state
      const list = tasks
      list.push({text: draft, done: false})
      this.setState({tasks: list, draft: ''})
    }

    removeAll = () => {
      this.setState({tasks: []})
    }
  
    render() {
      const { title } = this.props
      const { tasks, draft } = this.state
      
      return(
        <Container>
          <Header>{title}</Header>
          <DestroyButton onClick={this.removeAll}>Usuń wszystko</DestroyButton>
          {tasks.map(task => <TodoItem text={task.text} done={task.done} />)}
          <NewTodoForm 
          onSumbit={this.addTodo}
          onChange={this.updateDraft}
          draft={draft} />

        </Container>
      )
    }
  }
  class App extends Component {
    myTasks = []
    render() {
      return (
        <div>
      <Header>
        <TodoList title='TODOS' tasks={this.myTasks}/>   
      </Header>
      </div>
    );
    }
  }


export default App;
