import template from './containers.html';

class ContainerController{
    constructor(containersService){
        console.log('containers controllerx');
        this.service = containersService;
        containersService.getContainers().then((res)=>{
            this.containers = res.data;
        })
    }

    stopContainer(container) {
        this.service.stopContainer(container.containerId).then((res) => {
            container.status = "Exited";
            console.log(res);
        });
    }

    deleteContainer(container, index) {
        this.service.deleteContainer(container.containerId).then((res) => {
            this.containers.splice(index,1);
            console.log(res);
        });
    }
    // createContainer(container) {
    //     this.service.createContainer(container.containerId).then((res) => {
    //         console.log(res);
    //     });
    // }
}

let component = {
    bindings: {
        // userName: '@',
        // enableNavigationBar: '<'
    },
    template,
    controller: ContainerController
};

export default component;
