import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/configureStore.js'
import Router from './containers/Router'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
