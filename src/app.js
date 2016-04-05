import ReactDOM from 'react-dom'
import React from 'react'
import store from './store'
import Root from './containers/Root'

ReactDOM.render(<Root store = {store} />, document.getElementById('container'))


/*
const wrappedIncrement = () => store.dispatch(increment())

function rerender() {
    ReactDOM.render(<Counter count={store.getState().count} increment = {wrappedIncrement} />, document.getElementById('container'))
}


rerender()

store.subscribe(rerender)*/
