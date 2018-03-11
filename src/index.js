import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import anecdoteService from './services/anecdotes'
import { anecdoteInitialization } from './reducers/anecdoteReducer'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(anecdoteInitialization(anecdotes))
)

render()
store.subscribe(render)