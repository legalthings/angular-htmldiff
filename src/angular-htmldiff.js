/**
 * angular-htmldiff
 * https://github.com/legalthings/angular-htmldiff
 * Copyright (c) 2017 ; Licensed MIT
 */

+function () {
    'use strict';

    var module = angular.module('htmldiff', []);

    module.service('htmldiff', [function () {
        var minify = (function () {
            return typeof require !== 'undefined' ? require('html-minifier').minify : null;
        })();

        function sanitize(html) {
            var minified = minify ? minify(html, {
                collapseWhitespace: true,
                decodeEntities: true
            }) : html;

            return minified.replace(/\s+/g, ' ');
        }

        return function (before, after) {
            return htmldiff(sanitize(before), sanitize(after));
        }
    }]);
}();
