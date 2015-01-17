'use strict';

angular.module('app')
  .controller('MainController', function ($scope, $translate, $location, $http, $anchorScroll, $log) {

  $scope.changeLanguage = function (language) {
    $translate.use(language);
  };

  $scope.gotoAnchor = function (anchor) {
    if ($location.hash() !== anchor) {
      $location.hash(anchor);
    } else {
      $anchorScroll();
    }
  };

  $scope.contact = {};

  $scope.sendContact = function (contact) {
    $log.debug('sendContact', contact);

    var url;
    if (location.hostname === '33.33.33.10') {
      url = '/_ah/api/core/v1/contact/';
    } else {
      url = 'https://thaiinhk.appspot.com/_ah/api/core/v1/contact/';
    }

    $http.post(url, contact)
    .success(function (data, status, headers, config) {
      $log.debug('success', data, status, headers, config);
      $('#contactModal').modal('show');
      $scope.contact = {};
    })
    .error(function (data, status, headers, config) {
      $log.debug('fail', data, status, headers, config);
    });
  };

});
