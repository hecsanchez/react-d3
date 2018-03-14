import React from 'react'
import {Provider} from 'react-redux'
import configureStore from 'redux/configureStore'
import ThemedApp from 'containers/ThemedApp'
import Dashboard from 'containers/Dashboard'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ThemedApp>
      <Dashboard />
    </ThemedApp>
  </Provider>
)

export default App
