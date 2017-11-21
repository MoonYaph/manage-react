import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import app from '../routes'
import store from '../store'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route component={app} />
    </BrowserRouter>
  </Provider>
)

export default App
