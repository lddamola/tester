import app from '../../modules.js';
import template from './file-page.html';

class filePageController{
    constructor(reposService, $timeout){
        this.reposService = reposService;
        this.$timeout = $timeout;
    }

    $onInit() {       
        console.log(this.repoName + "|" + this.filePath)
        this.reposService.getFile(this.repoName, this.filePath).then((res)=>{
            this.file = res.data
        });

        // this.$timeout(function () { 
        //     PR.prettyPrint(); 
        // }, 1000);

    }

    // $postLink() {
    //     PR.prettyPrint();
    // }
}

const component = {
    bindings: {
        repoName: '<',
        filePath: '<'
    },
    controller: filePageController,
    template
};

app.component('filePage', component);
