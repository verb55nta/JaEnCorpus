import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import ContainerApp from './container/container_app'
import reducer from './reducer'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <ContainerApp />
    </Provider>,
    document.getElementById('root')
)