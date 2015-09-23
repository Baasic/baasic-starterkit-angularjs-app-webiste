angular.module('myMobileApp').provider('baasicAppConfig', function () {
    'use strict';
    this.config = {
        apiKey: '<apiKey>',
        apiRootUrl: '<apiRootUrl>',
        apiVersion: '<apiVersion>'
    };
    this.$get = function () {
    };
});