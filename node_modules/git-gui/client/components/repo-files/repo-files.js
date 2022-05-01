import template from './repo-files.html';

class ReposListController{
    constructor(reposService) {
        this.reposService = reposService
    }
    $onInit() {
        this.reposService.getFiles(this.repoName, this.folderName).then((res)=>{
            this.files = res.data;
        });
    }

}

const component = {
    bindings: {
        folderName: '<',
        repoName: '<',
    },
    controller: ReposListController,
    template
};

angular.module('app')
    .component('repoFiles', component);
