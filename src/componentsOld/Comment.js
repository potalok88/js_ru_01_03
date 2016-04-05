import React, { Component, PropTypes } from 'react'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object
    };

    render() {
        const { text, user } = this.props.comment
        return (
            <div>
                <p>{text} <b> by {user}</b></p>
            </div>
        )
    }
}

export default Comment