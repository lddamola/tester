import app from '../../modules.js';
import template from './folder-page.html';

class ReposPageController{
    constructor(reposService){
        this.reposService = reposService;
    }

    $onInit() {
        this.reposService.getReadMe(this.repoName, this.folderName).then((res)=>{
            this.readme = res.data
        });
    }
}

const component = {
    bindings: {
        repoName: '<',
        folderName: '<'
    },
    controller: ReposPageController,
    template
};

app.component('folderPage', component);
