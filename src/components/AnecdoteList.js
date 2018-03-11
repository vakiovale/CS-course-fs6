import React from 'react'
import { anecdoteVoter } from '../reducers/anecdoteReducer'
import { notificationAdder, notificationResetter } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const anecdotes = this.props.store.getState().anecdotes
    const handleVote = (anecdote) => {
      this.props.store.dispatch(anecdoteVoter(anecdote.id))
      this.props.store.dispatch(notificationAdder('Voted "' + anecdote.content + '"'))
      setTimeout(() => {
        this.props.store.dispatch(notificationResetter())
      }, 5000)
    }
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes)
          .filter(anecdote => anecdote.content.match(new RegExp(this.props.store.getState().filter, 'i')))
          .map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() =>
                  handleVote(anecdote)
                }>
                  vote
                </button>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default AnecdoteList
