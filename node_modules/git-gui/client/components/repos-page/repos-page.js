import app from '../../modules.js';
import template from './repos-page.html';

class ReposPageController{
    constructor(reposService){
        this.reposService = reposService;
    }

    $onInit() {
        this.reposService.getReadMe(this.repoName).then((res)=>{
            this.readme = res.data
        });
    }
}

const component = {
    bindings: {
        repoName: '<'
    },
    controller: ReposPageController,
    template
};

app.component('reposPage', component);
