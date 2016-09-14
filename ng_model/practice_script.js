/**
 * Created by Parth N Patel on 9/12/2016.
 */
(function () {

    'use strict';
    var app = angular.module("myApp",[]);

    app.controller("appController",['$scope',appController]);

    function appController($scope) {
        $scope.name = "Patel";
        $scope.role = "admin";
        $scope.$watch("name", function (newVal1) {
            console.log(newVal1);
        })
    };

    /*app.directive('myDirective',function () {
        return{
            link: function ($scope, $elem, $attr) {

                    $elem[0].value = $scope[$attr.myDirective];

                    $elem[0].addEventListener('keyup',function () {
                    $scope[$attr.myDirective] = $elem[0].value;
                    console.log( $scope[$attr.myDirective]);

                });
            }
        }
    });*/

    app.directive('myDirective',function () {
        return{

            scope: {
              lableParth : "="
            },

            link: function ($scope, $elem, $attr) {

                $elem[0].value = $scope.lableParth;

                $elem[0].addEventListener('keyup',function () {

                    var value = this.value;
                    $scope.$apply(function () {
                        $scope.lableParth = value;
                    });

                });
            }
        }

    });

})();
