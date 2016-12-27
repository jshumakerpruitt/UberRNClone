import { createStore, applyMiddleware } from 'redux'

import reducer from '../redux/index.js'

import thunk from 'redux-thunk'

import createLogger from 'redux-logger'

const middleware = [ thunk ]

// Use the NODE_ENV to include logging and debugging tools
// in development environment. They will be compiled out of
// the production build.
if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger())
  // Turns on Reactotron debugging tool
  require('../config/ReactotronConfig')
}

export default (initialState) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware),
    // autoRehydrate()
  )
  // persistStore(store)
  return store
}
