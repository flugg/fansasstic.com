var app = angular.module( 'fansasstic', [ 'hljs', 'ng-slide-down', 'sticky' ] );

app.controller( 'MainController', [ '$scope', function ( $scope ) {

    $scope.folderBase = true;
    $scope.folderComponents = false;
    $scope.folderModules = false;
    $scope.folderVariables = true;

    $scope.goHome = function() {
        $scope.hasSideBar = false;
        $scope.active = 'home';
        $scope.activePage = 'app/getting-started.html';
        $scope.title = 'Getting started';
    };

    $scope.goToDocs = function() {
        $scope.hasSideBar = true;
        $scope.active = 'documentation';
        $scope.activePage = 'app/documentation.html';
        $scope.title = 'Documentation';
    }

    $scope.toggleBase = function( $event ) {
        $scope.folderBase = ! $scope.folderBase;
    }

    $scope.toggleComponents = function() {
        $scope.folderComponents = ! $scope.folderComponents;
    }

    $scope.toggleModules = function() {
        $scope.folderModules = ! $scope.folderModules;
    }

    $scope.toggleVariables = function() {
        $scope.folderVariables = ! $scope.folderVariables;
    }

    $scope.goHome();

} ] );