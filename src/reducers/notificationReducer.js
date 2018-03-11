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
  return showNotification(notification)
}

export const notificationResetter = () => {
  return resetNotification()
}

const showNotification = (notification) => {
  return {
    type: 'ADD',
    notification: notification
  }
}

const resetNotification = () => {
  return {
    type: 'RESET'
  }
}

export const notify = (notification, delayTime) => {
  return async (dispatch) => {
    console.log('Added notification')
    dispatch(showNotification(notification))
    setTimeout(() => {
      console.log('Resetting notification')
      dispatch(resetNotification())
    }, delayTime * 1000)
  }
}

export default reducer