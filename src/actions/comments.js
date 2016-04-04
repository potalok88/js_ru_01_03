import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_FOR_PAGE } from './constants'
import { loadForArticle, loadForPage } from './api/comments'
import { asyncAC } from './api/utils'

export function addComment(comment, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {comment, articleId}
    })
}

export const loadCommentForPage = asyncAC(loadForPage, LOAD_COMMENTS_FOR_PAGE)
export const loadCommentsForArticle = asyncAC(loadForArticle, LOAD_COMMENTS_FOR_ARTICLE)