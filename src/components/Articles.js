import React, { Component, PropTypes } from 'react'

class Articles extends Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func
    };
    //<h1 onClick = {increment}>{count}</h1>
    render() {
        const { count, increment } = this.props
        return (
            <div>
                <h3>test</h3>
            </div>
        )
    }
}

export default Articles