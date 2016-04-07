import React, {Component, PropTypes} from 'react'
import {deleteArticle} from '../actions/articles'

import {connect} from 'react-redux'

class Articles extends Component {
    static propTypes = {};


    render() {
        const { deleteArticle } = this.props
        const articleList = this.props.articles.map((article) =>
            <div key={article.id}>
                <p>{article.title}</p>
                <p onClick= {deleteArticle.bind(this,article)}>Удалить</p>
            </div>
        )
        return (
            <div>
                {articleList}
            </div>
        )
    }
}


export default connect((state) => {
    const {articles} = state
    return {articles}
}, {
    deleteArticle
})(Articles)