import appService from './appService';

function findAll() {
    return appService.find('/articles');
}

function findArticle(id) {
    return appService.findBasic('/articles/'+id);
}

const articlesAPi = {
    findAll,
    findArticle,
}

export default articlesAPi;