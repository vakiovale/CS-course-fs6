import anecdoteService from '../services/anecdotes'

const reducer = (store = [], action) => {
  if(action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes + 1 } ]
  }
  if(action.type === 'CREATE') {
    return [...store, action.data]
  }
  if(action.type === 'NEW_ANECDOTE') {
    return [...store, action.data]
  }
  if(action.type === 'INIT_ANECDOTES') {
    return action.data
  }

  return store
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const anecdoteCreator = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const anecdoteVoter = (anecdote) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteService.vote(anecdote)
    console.log(votedAnecdote)
    dispatch({
      type: 'VOTE',
      id: votedAnecdote.id
    })
  }
}

export default reducer