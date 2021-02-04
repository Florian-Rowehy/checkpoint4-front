import appService from './appService';

function findAll() {
    return appService.find('/article_classifications');
}

const classificationsAPI = {
    findAll
}

export default classificationsAPI;