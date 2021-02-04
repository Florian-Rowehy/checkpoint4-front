import appService from './appService';

function findAll() {
    return appService.find('/categories');
}

const categoriesAPI = {
    findAll
}

export default categoriesAPI;