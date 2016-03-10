(function () {
    var myApp = 'myApp';
    angular.module(myApp, ['ui.bootstrap']);
    
    // config
    angular.module(myApp)
    .config(['uibDatepickerPopupConfig',function (datepickerPopupConfig) {

        angular.extend(datepickerPopupConfig, {
        currentText: '今日',
        clearText: '元に戻す',
        closeText: '閉じる',
        formatDayTitle:'yyyy年MMMM',
        showWeeks: false,

        });

    }]);
})();