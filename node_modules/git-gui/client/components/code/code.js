// angular.module('app')
//     .directive('codeView', function($timeout){
//     	return {
//     		template: `<pre ng-bind="code"></pre>`,
//     		scope: {
//   				// same as '=customer'
//   				code: '<'
// 			},
// 			link: function (scope, element, attrs) {
// 				element.find('pre').addClass('prettyprint linenums lang-js');
// 				PR.prettyPrint();

// 				// prettyPrint();

// 				// $timeout(function () { 
//     //         		PR.prettyPrint(); 
//     //     		}, 1000);
// 				// PR.prettyPrint(); 
// 			}
//     	}
//     });
