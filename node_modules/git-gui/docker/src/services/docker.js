'use strict';
console.log('docker service started');

var p = require('child_process');
var $q = require('q');
var exec = p.exec;
var spawn = p.spawn;

exports.getImages = () => {
    var deferred = $q.defer();
    var cmd = "docker images";

    exec(cmd, (err, data, derr) => {
        var items = data.split(/\r?\n/);
        items.shift();
        items.pop();

        var images = [];

        items.forEach(row=>{
            images.push(new Image(...row.split(/[ , ][ , ]+/)));
        })
        
        // console.log(images);
        deferred.resolve(images);
    });
    return deferred.promise;
}

exports.createContainer = imageId => {
    //console.log('imageid: '+ req.body.imageId);
    var deferred = $q.defer();
    var cmd = `docker run -it -d ${imageId} /bin/bash`;

    console.log(cmd)

    exec(cmd, (err, data, derr) => {
        console.log(data);
        deferred.resolve(data);
    });
    return deferred.promise;
}
exports.getContainers = () => {
    var deferred = $q.defer();
    var cmd = `docker ps -a --format '{{.ID}}|{{.Image}}|{{.Command}}|{{.CreatedAt}}|{{.Status}}|{{.Ports}}|{{.Labels}}'`;

    exec(cmd, (err, data, derr) => {
        var items = data.split(/\r?\n/);
        items.shift();
        items.pop();

        var containers = [];

        items.forEach(row=>{
            containers.push(new Container(...row.split('|')));
        })
        
        // console.log(images);
        deferred.resolve(containers);
    });
    return deferred.promise;
}

exports.stopContainer = containerId => {
    var deferred = $q.defer();
    var cmd = `docker stop ${containerId}`;

    console.log(cmd)

    exec(cmd, (err, data, derr) => {
        console.log(data);
        deferred.resolve(data);
    });
    return deferred.promise;
}

exports.deleteContainer = containerId => {
    var deferred = $q.defer();
    var cmd = `docker rm ${containerId}`;

    console.log(cmd)

    exec(cmd, (err, data, derr) => {
        console.log(data);
        deferred.resolve(data);
    });
    return deferred.promise;
}

exports.getContainerLogs = containerId => {
    var deferred = $q.defer();
    const ls = spawn('docker', ['logs', '-f', containerId]);

    ls.stdout.on('data', (data) => {
        console.log('00');
        deferred.notify(data);
    });

    ls.on('close', (code) => {
        console.log('01');
        deferred.resolve(code);
    });



    // var cmd = `docker logs ${containerId}`;

    // console.log(cmd);

    // var stream = spawn(cmd);

    // stream.stdout.on('data', function(data) {
    //     console.log('stdout: ' + data);
    // });

    // stream.stderr.on('data', function(data) {
    //   console.log('stderr: ' + data);
    // });

    // stream.on('exit', function(code) {
    //   console.log('exit code: ' + code);
    // });

    // var dir = spawn('cmd', ['~', 'dir']);
    // dir.stdout.on("data", function(data) {
    //     console.log(data);
    //     // do things
    // })




    // stream(cmd, (err, data, derr) => {
    //     console.log(data);
    //     deferred.resolve(data);
    // });
    return deferred.promise;
}

class Image{
    constructor(repository, tag, imageId, created, size) {
        this.repository = repository;
        this.tag = tag;
        this.imageId = imageId;
        this.created = created;
        this.size = size;
    }
}

class Container{
    constructor(containerId, image, command, created, status, ports, names) {
        console.log(ports);
        this.containerId = containerId;
        this.image = image; 
        this.command = command;
        this.created = created;
        this.status = status;
        this.ports = ports;
        this.names = names;
    }

}