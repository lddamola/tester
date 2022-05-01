import template from './images.html';

class ImageController{
    constructor(imagesService){
        console.log('images controllerx');
        this.service = imagesService;
        imagesService.getImages().then((res)=>{
            this.images = res.data;
        })
    }

    createContainer(image) {
        this.service.createContainer(image.imageId).then((res) => {
            console.log(res);
        });
    }
}

let component = {
    bindings: {
        // userName: '@',
        // enableNavigationBar: '<'
    },
    template,
    controller: ImageController
};

export default component;
