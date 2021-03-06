angular
	.module("ngClassifieds", ["ngMaterial"])
	.config(function($mdThemingProvider){

		$mdThemingProvider.theme('default') //Changes to the default theme
			.primaryPalette('teal')
			.accentPalette('orange');

	})
	.directive("helloWorld", function() {	//Dont put in scope even tho using scope.message
		return {
			template: "<h1>{{ message }}</h1>"
		}
	}); //angular will convert camelcase to cababcase -> hello-world