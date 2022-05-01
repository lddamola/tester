import template from './container.html';
// import oboe from 'oboe';
var oboe = require('oboe');
// import io from 'socket.io-client';
// var url = `http://ama29-desktop.sf.cloud.cas.org:3000`;
class ContainerController{
    constructor(containersService, $http, $stateParams, $q, $scope, $sce){
        console.log('containers controllerzz');
        this.loading = true;
        this.items = [];        

        var containerid = $stateParams.id;
        
        console.log(containerid);

        const defer = $q.defer();

        const url =  `/api/containers/${containerid}/logs`;
        
        this.cancel = ()=> {
             if(this.evtSource.close) {
                this.evtSource.close();
                this.loading = false;
            }
        }

        $scope.to_trusted = function(html_code) {
            return $sce.trustAsHtml(html_code);
        }
    

        var getStream = (url)=> {
            const defer = $q.defer();
            this.evtSource = new EventSource(url);
            this.evtSource.onmessage = function(e) {
                defer.notify(e);
            }
            this.evtSource.onerror = function(e) {
                console.log("EventSource failed.");
            };
            return defer.promise;
        };

        $scope.$on('$destroy', ()=> {
            // clean up stuff
            if(this.evtSource.close) {
                this.evtSource.close();
                this.loading = false;
            }
        });


         getStream(url).then((data)=> {
                    this.items.push('--------------------------------------------------------------------------------------------------');
                }, 
                ()=> {
                    //error
                }, 
                (event) => {
                    if(event.data) {
                        this.items.push(event.data.replace(/\n/g, "<br />"));
                    }
                }
            );


        // var getStream = (request)=> {
        //     const defer = $q.defer();
        //     const stream = oboe(request)
        //         .fail(errorResponse => {
        //             console.log(errorResponse);
        //         })
        //         .node('!.*', node => {
        //             const copy =//= JSON.parse(JSON.stringify(node));
        //             String.fromCharCode.apply(null, new Uint16Array(node));

        //             // console.log(copy);
        //             // if (node.hasOwnProperty('type')) {
        //             //     // NSF-2403 - workaround for oboe.js memory leak issue
        //             //     const copy = JSON.parse(JSON.stringify(node));

        //                 defer.notify(copy);
        //                 return oboe.drop;
        //             // }
        //         })
        //         .done(parsedJson => {
        //             // console.log(parsedJson);
        //             defer.resolve(parsedJson);
        //             // if (!parsedJson.hasOwnProperty('error')) {
        //             //     defer.resolve(parsedJson);
        //             // }
        //         });

        //     return {promise: defer.promise, abort: stream.abort};
        // };
        

        // var i =0;
        // getStream(request).promise.then((data)=> {
        //     // this.items.
        //     this.items.push('--------------------------------------------------------------------------------------------------');
        // }, 
        // ()=> {
        //     //error
        // }, 
        // (event) => {
        //     if(event) {
        //         this.items.push(event.replace(/\n/g, "<br />"));
        //     }
        //     // console.log(`${i++}:${event}`);
        // }
        // );




        // $http.get(`/api/containers/${containerid}/logs`)
        // .then(function(responseData) {
        //     console.log(responseData);
        // });
        // var socket = io.connect(url);

        // socket('http://localhost:3000');
        // socket.on('connect', function(){
        //     console.log('connected');
        // });
        // socket.on('event', function(data){

        // });
        // socket.on('disconnect', function(){

        // });

        // var socket = connect('http://localhost:3000');
        // socket.on('connect', function(data) {
        //     socket.emit('join', 'Hello World from client');
        // });


        // this.service = containersService;
        // containersService.getContainers().then((res)=>{
        //     this.containers = res.data;
        // })
    }

    // stopContainer(container) {
    //     this.service.stopContainer(container.containerId).then((res) => {
    //         container.status = "Exited";
    //         console.log(res);
    //     });
    // }

    // deleteContainer(container, index) {
    //     this.service.deleteContainer(container.containerId).then((res) => {
    //         this.containers.splice(index,1);
    //         console.log(res);
    //     });
    // }
    // createContainer(container) {
    //     this.service.createContainer(container.containerId).then((res) => {
    //         console.log(res);
    //     });
    // }
}

let component = {
    bindings: {
        id: '<'
        // userName: '@',
        // enableNavigationBar: '<'
    },
    template,
    controller: ContainerController
};

export default component;
