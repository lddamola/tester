var express = require('express');
var controller = express.Router();
var service = require('../services/docker.js');
var cp = require("child_process");

controller.get('/', (req, res) => {
    service.getContainers().then(containers => {
        res.json(containers);
    })
});

controller.post('/', (req, res) => {
    service.createContainer(req.body.imageId).then(containerId => {
    	console.log('id'+ containerId);
    	res.status(201).json(containerId);
    })
});

controller.put('/', (req, res) => {
    service.stopContainer(req.body.containerId).then(containerId => {
    	console.log('id'+ containerId);
    	res.status(200).json(containerId);
    })
});

// get logs
controller.get('/:containerId/logs', (req, res) => {
    // var spw = cp.spawn('ping', ['-c', '100', '127.0.0.1']);
    var spw = cp.spawn('docker', ['logs', '-f', req.params.containerId]);

    req.connection.addListener("close", function () {
        console.log('client closed');
        spw.stdin.pause();
        spw.kill();

    });

    res.writeHead(200, { "Content-Type": "text/event-stream",
                         "Cache-control": "no-cache" });

    var str = "";

    spw.stdout.on('data', function (data) {
        str += data.toString();

        // just so we can see the server is doing something
        console.log(data);
        // Flush out line by line.
        var lines = str.split("\n");
        for(var i in lines) {
            if(i == lines.length - 1) {
                str = lines[i];
            } else{
                // Note: The double-newline is *required*
                res.write('data: ' + lines[i] + "\n\n");
            }
        }
    });
 
    spw.on('close', function (code) {
        console.log('5');
        // res.status(404);
        res.end(str);
    });

    spw.stderr.on('data', function (data) {
        console.log('6');
        // res.end('stderr: ' + data);
    });

    // console.log(':containerId/logs');


    // res.set('Content-Type', 'application/json');
    // res.writeHead(200, { "Content-Type": "text/event-stream",
    //                  "Cache-control": "no-cache" });

    // service.getContainerLogs(req.params.containerId).then(
    //     function(data) {
    //         //sucess
    //         console.log('03');
    //         res.status(200);
    //         res.end();
    //     },
    //     function(error) {
    //         //error
    //          console.log('04');
    //          console.log(error);
    //     },
    //     function(data) {
    //         console.log('02');
    //         res.write(JSON.stringify(data));
    //     }
    // );

    // res.status(200).json(req.params.containerId);
    // service.getContainerLogs(req.params.containerId).then(data => {
    //     console.log(data);
    //     res.write(data);
    //     res.end();

    // //     // res.json(containers);
    //      // res.status(200).json("ok");
    // })
});


controller.delete('/:containerId', (req, res) => {
	console.log(req);
    service.deleteContainer(req.params.containerId).then(containerId => {
    	console.log('id'+ containerId);
    	res.status(202).json(containerId);
    })
});



module.exports = controller;
