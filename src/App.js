import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from './components/Menu'
import Checkout from './containers/Checkout'
import List from './containers/List'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Menu />
      <Router>
        <Route exact path="/" render={() => <Checkout /> } />
        <Route exact path="/list" render={() => <List /> } />
      </Router>
    </Provider>
  )
}

export default App
