import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreator } from '../reducers/anecdoteReducer'
import { notificationAdder, notificationResetter } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.anecdoteCreator(content)
    e.target.anecdote.value = ''
    this.props.notificationAdder('Added new anecdote')
    setTimeout(() => {
      this.props.notificationResetter()
    }, 5000)
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
  { anecdoteCreator, notificationAdder, notificationResetter }
)(AnecdoteForm)

export default ConnectedAnecdoteForm