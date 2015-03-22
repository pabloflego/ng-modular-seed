(function() {
    'use strict';

    angular
        .module('app.main')
        .run(appRun);

    // appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/modules/main/main.html',
                    controller: 'Main',
                    controllerAs: 'vm',
                    title: 'main',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Juego'
                    }
                }
            }
        ];
    }
})();
