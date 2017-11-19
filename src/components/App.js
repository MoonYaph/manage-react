import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import app from '../routes'
import store from '../store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route component={app} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
