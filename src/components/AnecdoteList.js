import React from 'react'
import { connect } from 'react-redux'
import { anecdoteVoter } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const handleVote = async (anecdote) => {
      this.props.anecdoteVoter(anecdote)
      this.props.notify('Voted "' + anecdote.content + '"', 5)
    }
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.visibleAnecdotes.map(anecdote =>
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

const anecdotesToShow = (anecdotes, filter) => {
  return anecdotes.sort((a, b) => b.votes - a.votes)
    .filter(anecdote => anecdote.content !== undefined && anecdote.content.match(new RegExp(filter, 'i')))
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  { anecdoteVoter, notify }
)(AnecdoteList)

export default ConnectedAnecdoteList
