/// reference to angularjs/angular.d.ts

(function () {

    function TodoController() {
        this.list = [];
        this.clickButton = function () {
            this.todo.date = Date.now();
            this.todo.endDate = this.dt.setHours(0, 0, 0, 0);
            this.list.push(this.todo);
            this.todo = {};
        }

        this.today = function () {
            this.dt = new Date();
        };
        this.today();

        this.open = function () {
            this.popup.opened = true;
        };

        this.setDate = function (year, month, day) {
            this.dt = new Date(year, month, day);
        };

        this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        this.format = this.formats[1];
        this.altInputFormats = ['M!/d!/yyyy'];

        this.popup= {
            opened: false
        };

    }

    angular.module('myApp')
        .component('todo', {
            templateUrl: 'todo.html',
            controllerAs: 'app',
            controller:TodoController
        });
})();