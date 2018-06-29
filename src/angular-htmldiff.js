/**
 * angular-htmldiff
 * https://github.com/legalthings/angular-htmldiff
 * Copyright (c) 2017 ; Licensed MIT
 */

+function () {
    'use strict';

    var module = angular.module('htmldiff', []);

    module.service('htmldiff', [function () {
        return function (before, after) {
            return htmldiff(before, after);
        }
    }]);
}();
