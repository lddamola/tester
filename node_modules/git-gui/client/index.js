import angular from 'angular';
import 'angular-ui-router';
import Showdown from 'showdown';
import app from './modules.js'
window.Showdown  = Showdown ;

///////services 
import './components/repos-list/repos-list-service.js';
////// components
import './components/repos-page/repos-page.js';
import './components/repos-list/repos-list.js';
import './components/repo-files/repo-files.js';
import './components/file-page/file-page.js';
import './components/code/code.js';




app.config(function($locationProvider, $compileProvider, $httpProvider, $stateProvider, hljsServiceProvider) {
    $locationProvider.html5Mode(true);

    $compileProvider.debugInfoEnabled('<dev-only-angular-debug-info>');

    $httpProvider.defaults.cache = false;

    $stateProvider
        .state('home', {
            url: '/',
            onEnter: function() {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'reposList'
                }


            }
        })
        .state('repo', {
            url: '/repo/:name',
            views: {
                "content": {
                    component: "reposPage"
                }
            },
            resolve: {
                repoName: ($stateParams)=> {
                    return $stateParams.name;
                }
            }
        })
        .state('folder', {
            url: '/repo/:name/tree/master/*path',
            onEnter: function() {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'repoFiles'
                }
            },
            resolve: {
                repoName: ($stateParams)=> {
                    return $stateParams.name;
                },
                folderName: ($stateParams)=> {
                    return $stateParams.path;
                }
            }
        })
        .state('file', {
            url: '/repo/:name/blob/master/*path',
            onEnter: function() {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'filePage'
                }
            },
            resolve: {
                repoName: ($stateParams)=> {
                    return $stateParams.name;
                },
                filePath: ($stateParams)=> {
                    return $stateParams.path;
                }
            }
        })
        .state('xxx', {
            url: '/xxx',
            template: 'nononono'
        })

    hljsServiceProvider.setOptions({
        // replace tab with 2 spaces
        tabReplace: '  '
    });

});


