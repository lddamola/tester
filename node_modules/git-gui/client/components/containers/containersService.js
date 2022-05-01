'use strict';
class ContainersService {
    constructor($http) {
        this.$http = $http;
    }
    getContainers() {
        return this.$http.get('/api/containers');
    }

    stopContainer(containerId) {
    	return this.$http.put('/api/containers', {
    		containerId: containerId
    	});
    }

    deleteContainer(containerId) {
		return this.$http({
            url: `/api/containers/${containerId}`,
            method: 'DELETE'
        })
    }
}

export default ContainersService;
