const initialStore = 'Anecdotes!'

const reducer = (store = initialStore, action) => {
  if(action.type === 'ADD') {
    return action.notification
  } else if(action.type === 'RESET') {
    return initialStore
  }
  return store
}

export const notificationAdder = (notification) => {
  return {
    type: 'ADD',
    notification: notification
  }
}

export const notificationResetter = () => {
  return {
    type: 'RESET'
  }
}

export default reducer