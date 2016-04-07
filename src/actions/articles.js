import {DELETE_ARTICLE} from '../constants'

export function deleteArticle(article) {
    return {
        type: DELETE_ARTICLE,
        deletedArticle:article
    }
}