import React from 'react'
import Comment from './Comment'
import toggleOpen from '../mixins/toggleOpen'

export default React.createClass({
    mixins: [toggleOpen],

    getInitialState() {
        return {
            currentText: 'hello world'
        }
    },

    render: function() {
        const { isOpen } = this.state
        const actionText = isOpen ? 'hide comments' : 'show comments'

        const comments = this.props.comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>)
        return (
            <div>
                <a href = "#" onClick = {this.toggleOpen}>{actionText}</a>
                <ul>{isOpen ? comments : null}</ul>
            </div>
        )
    }
});