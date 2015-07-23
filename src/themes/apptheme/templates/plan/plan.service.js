(function(angular) {
    'use strict';
    
    angular.module('baasic.mobileApp')
    .service('planService', ['baasicApiHttp', 'baasicDynamicResourceService', function (baasicApiHttp, dynamicResourceService) {    
        var resourceName = 'plans';
        
        this.get = function get(id, options) {
            return dynamicResourceService.get(resourceName, id, options);
        };
        
        this.find = function find(options) {
            return dynamicResourceService.find(resourceName, options);
        };
        
        this.create = function create(plan) {
            return dynamicResourceService.create(resourceName, plan);
        };
        
        this.update = function update(plan) {
            plan.createDate = new Date();
            return dynamicResourceService.update(plan);
        };
        
        this.remove = function remove(plan) {
            return dynamicResourceService.remove(plan);
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