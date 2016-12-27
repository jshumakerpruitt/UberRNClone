import { createStore } from 'redux'

import reducer from '../redux/index.js'

const store = createStore(reducer)

export default store
