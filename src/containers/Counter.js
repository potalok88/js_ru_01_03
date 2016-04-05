import Counter from '../components/Counter'
import { increment } from '../actions/counter'
import { connect } from 'react-redux'

import React, { Component, PropTypes } from 'react'

class CounterContainer extends Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func
    };

    render() {
        const { count, increment } = this.props
        return (
            <div>
                <h1 onClick = {increment}>{count}</h1>
            </div>
        )
    }
}

export default connect((state) => {
    const { count } = state
    return { count }
}, {
    increment
})(CounterContainer)