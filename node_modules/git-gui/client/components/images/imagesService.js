'use strict';

import angular from 'angular';

class ImagesService {
    constructor($http) {
        this.$http = $http;
    }
    getImages() {
        return this.$http.get('/api/images');
        // return [{imageId: `51542`}];
    }

    createContainer(imageId) {
    	return this.$http.post('/api/containers', {
    		imageId: imageId
    	});
    }
}

export default ImagesService;
// export default angular.module('app').service('imagesService', ImagesService);

// var angular = require('angular');
// function ImagesService($http) {
//     this.getImages = ()=> {
//         return [{imageId: `51651`}];
//     }
// }
// angular.module('app').service('imagesService', ImagesService);
