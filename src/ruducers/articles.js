import {DELETE_ARTICLE} from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default (articles = defaultArticles, action) => {
    const {type, deletedArticle} = action
    console.log(action);
    switch (type) {
        case DELETE_ARTICLE:
            /* Вот это вообще не оптимально, но у меня был тяжёлый день */
            const indexDeletedArtilce = articles.lastIndexOf(deletedArticle);
            let articlesLength = articles.length;
            /* в этом месте нужно делать по хорошему Array.slice или цикл map, но технически это новый массив
             * как в задании и требуется
             * */
            let bufferArray = [];
            for (let i = 0; i < articlesLength; i++) {
                if (indexDeletedArtilce != i) {
                    bufferArray.push(articles[i]);
                }
            }

            return bufferArray;


        default:
            return articles
    }
}