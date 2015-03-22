(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('Main', Main);

    Main.$inject = ['$q', 'dataservice', 'logger'];

    function Main($q, dataservice, logger) {

        /*jshint validthis: true */
        var vm = this;
        vm.title = 'Juego';

        activate();

        function activate() {
        }
    }
})();
