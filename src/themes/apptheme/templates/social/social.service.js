(function(angular) {
    'use strict';

    angular.module('baasic.mobileApp')
        .service('socialService', ['baasicApiHttp', 'baasicDynamicResourceService', function (baasicApiHttp, dynamicResourceService) {
                var resourceName = 'social';

                this.get = function get(id, options) {
                    return dynamicResourceService.get(resourceName, id, options);
                };

                this.find = function find(options) {
                    return dynamicResourceService.find(resourceName, options);
                };

                this.create = function create(social) {
                    return dynamicResourceService.create(resourceName, social);
                };

                this.update = function update(social) {
                    return dynamicResourceService.update(social);
                };

                this.remove = function remove(social) {
                    return dynamicResourceService.remove(social);
                };

                this.next = function next(dataList) {
                    var nextLink = dataList.links('next');
                    if (nextLink) {
                        return baasicApiHttp.get(nextLink.href);
                    }
                };

                this.previous = function previous(dataList) {
                    var prevLink = dataList.links('previous');
                    if (prevLink) {
                        return baasicApiHttp.get(prevLink.href);
                    }
                };
        }
    ]);
}(angular));