import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreator } from '../reducers/anecdoteReducer'
import { notificationAdder, notificationResetter, notify } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.anecdoteCreator(content)
    e.target.anecdote.value = ''
    this.props.notify('Added new anecdote', 5)
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

const ConnectedAnecdoteForm = connect(
  null,
  { anecdoteCreator, notificationAdder, notificationResetter, notify }
)(AnecdoteForm)

export default ConnectedAnecdoteForm