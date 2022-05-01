'use strict';
import angular from 'angular';
import $q from 'q'
import app from '../../modules.js'


class ReposService {
    constructor($http) {
        this.$http = $http;
    }
    getRepos() {
        return this.$http.get('/api/repos');
    }
    
    getFile(repoName, path) {
        // /:repo/blob/:branch/*
        // api/repos/scifinder/tree/master//e2e/pages

        var url = `/api/repos//${repoName}/blob/master/`
        if(path) {
            url = url + path;
        }
        return this.$http.get(url);
    }

    getFiles(repoName, path) {
        // var data = `[{"name":".babelrc","lastModifiedDate":"28 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"Empty project","size":"36"},{"name":".gitignore","lastModifiedDate":"28 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"Empty project","size":"31"},{"name":"AC","lastModifiedDate":"8 minutes ago","changedBy":"Ahmed Ahmed","commitMessage":"retrive the file size","size":"-"},{"name":"README.md","lastModifiedDate":"24 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"add project description to the gui","size":"93"},{"name":"bash","lastModifiedDate":"8 minutes ago","changedBy":"Ahmed Ahmed","commitMessage":"retrive the file size","size":"-"},{"name":"client","lastModifiedDate":"22 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"read me working","size":"-"},{"name":"docker","lastModifiedDate":"26 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"adding repos","size":"-"},{"name":"index.js","lastModifiedDate":"26 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"adding repos","size":"802"},{"name":"nodemon.json","lastModifiedDate":"28 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"Empty project","size":"63"},{"name":"package-lock.json","lastModifiedDate":"22 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"read me working","size":"362347"},{"name":"package.json","lastModifiedDate":"22 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"read me working","size":"792"},{"name":"src","lastModifiedDate":"8 minutes ago","changedBy":"Ahmed Ahmed","commitMessage":"retrive the file size","size":"-"},{"name":"webpack.config.js","lastModifiedDate":"22 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"read me working","size":"577"},{"name":""}]`
        // var deferred = $q.defer();
        // deferred.resolve({data: data});
        // return deferred.promise;

        // var url = `/api/repos/${repoName}/files`
        // if(folderName) {
        //     var url = `/api/repos/${repoName}?path=`+encodeURI(folderName)
        // }
// http://ama29-desktop2.sf.cloud.cas.org:3000/api/repos/scifinder/tree/master/client
        var url = `/api/repos/${repoName}/tree/master/`
        if(path) {
            url = url + path;
        }

        return this.$http.get(url);
    }
    
    getReadMe(repoName) {
        // var data = `"# git gui\n\nA`
        // var deferred = $q.defer();
        // deferred.resolve({data: data});
        // return deferred.promise;
        // var data = `"# git gui\n\nA graphical user interface to manage git repos\n\n```\nnpm start \nwebpack --watch\n```"
        return this.$http.get(`/api/repos/${repoName}/readme`);
    }

//     stopContainer(containerId) {
//     	return this.$http.put('/api/containers', {
//     		containerId: containerId
//     	});
//     }

//     deleteContainer(containerId) {
// 		return this.$http({
//             url: `/api/containers/${containerId}`,
//             method: 'DELETE'
//         })
//     }
}

app.service('reposService', ReposService);

export default ReposService;


