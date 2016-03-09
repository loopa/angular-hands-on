(function () {
    
    function TodoListController() {
        this.clickList = function (item) {
            item.done = !item.done;
        }
        this.clickDeleteButton = function (item) {
            var idx = this.list.indexOf(item);
            if (idx >= 0) {
                this.list.splice(idx, 1);
            }
        }
        this.countDown = function (start, end) {
            var s = new Date(start).setHours(0, 0, 0, 0);
            var e = new Date(end).setHours(0, 0, 0, 0);
            var count = (e - s);
            var day = Math.floor(count / (24 * 60 * 60 * 1000));
            var hour = Math.floor(count / (24 * 60 * 60 * 60 * 1000) / (60 * 60 * 1000));
            return day + ' days /' + hour;
        }
    }

    angular.module('myApp')
        .component('todoList', {
            templateUrl: 'todo-list.html',
            bindings: { list: '=' },
            controllerAs: 'todos',
            controller: TodoListController
        });
})();