import {DELETE_ARTICLE} from '../constants'

export function deleteArticle(article) {
    return {
        type: DELETE_ARTICLE,
        //советую все данные передавать в отведенном объекте: data или payload
        deletedArticle:article
    }
}
