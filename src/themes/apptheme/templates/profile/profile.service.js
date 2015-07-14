(function(angular) {
    'use strict';
    
    angular.module('baasic.mobileApp')
        .service('profileService', ['baasicApiHttp', 'baasicDynamicResourceService', function (baasicApiHttp, dynamicResourceService) {    
                var resourceName = 'profile';
    
                this.get = function get(id, options) {
                    return dynamicResourceService.get(resourceName, id, options);
                };
    
                this.find = function find(options) {
                    return dynamicResourceService.find(resourceName, options);
                };
    
                this.create = function create(profile) {
                    return dynamicResourceService.create(resourceName, profile);
                };
    
                this.update = function update(profile) {
                    profile.createDate = new Date();
                    return dynamicResourceService.update(profile);
                };
    
                this.remove = function remove(profile) {
                    return dynamicResourceService.remove(profile);
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