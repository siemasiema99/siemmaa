import React, { Component } from 'react';
import styled from 'styled-components'

const Item = styled.div`
    background: #343744;
    border-radius: 10px;
    padding: 14px;
    margin-bottom: 7px;
    color: white;
`

class TodoItem extends Component {

    
    static defaultProps = {
      done: false
    }

    state = {
      done: this.props.done
    }
      

    

    render () {
      const { text } = this.props

      return(
        <Item onClick={this.toggleDone} className={this.state.done ? 'doneTodo' : ''}>
          <p>{text}</p>
        </Item>
      )
    }
  }

  export default TodoItem