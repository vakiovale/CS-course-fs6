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

export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export const anecdoteCreator = (data) => {
  return {
    type: 'CREATE',
    data
  }
}

export const anecdoteVoter = (id) => {
  return {
    type: 'VOTE',
    id: id
  }
}

export default reducer