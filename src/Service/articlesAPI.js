import appService from './appService';

function findAll() {
    return appService.find('/articles');
}

const articlesAPi = {
    findAll
}

export default articlesAPi;