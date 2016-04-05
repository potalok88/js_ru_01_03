import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../HOC/toggleOpen'
import linkedState from 'react-addons-linked-state-mixin'
import { addComment, loadCommentsForArticle } from '../actions/comments'
import translate from '../HOC/translate'

const CommentList = React.createClass({
    mixins: [linkedState],
    propTypes: {
        article: PropTypes.object
    },
    getInitialState() {
        return {
            comment: ''
        }
    },

    contextTypes: {
        user: PropTypes.string
    },

    componentWillReceiveProps(nextProps) {
        const { article, isOpen } = nextProps
        if (article.loadedComments || article.loadingComments) return

        if (isOpen && !this.props.isOpen) loadCommentsForArticle({id: article.id})
    },
    render() {
        const { isOpen, toggleOpen, article,children, translate } = this.props
        const actionText = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                {children}
                <a href = "#" onClick = {toggleOpen}>{translate(actionText)}</a>
                {this.getList()}
                {this.getInput()}
            </div>
        )
    },
    getInput() {
        const { isOpen, translate } = this.props
        if (!this.props.isOpen) return null
        return <div>
            <input valueLink={this.linkState("comment")}/>
            <a href = "#" onClick = {this.addComment}>{translate('add comment')}</a>
        </div>
    },

    getList() {
        const {isOpen, article, translate} = this.props
        if (!isOpen) return null
        if (article.loadingComments) return <h3>{translate('loading')}</h3>
        if (!article.loadedComments) return null
        const commentItems = article.getRelation('comments').map((comment) =>
            <li key={comment.id}><Comment comment = {comment}/></li>
        )
        return <ul>{commentItems}</ul>
    },

    addComment(ev) {
        ev.preventDefault()
        addComment(this.state.comment, this.context.user, this.props.article.id)
        this.setState({
            comment: ''
        })
    }
})

export default translate(toggleOpen(CommentList))