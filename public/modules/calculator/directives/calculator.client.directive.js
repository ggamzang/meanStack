'use strict';

angular.module('calculator').
    controller('mainCtrl', function($scope){

        $scope.$on("sendResult", function(e, result){
            $scope.$broadcast("sendHistory", result);
        });

        $scope.$on("returnHistory", function (e, history) {
            $scope.$broadcast("returnHistoryToBody", history);
        });
        /*
        $scope.enter = function (event) {
            $scope.$broadcast("enterKey", event.keyCode);
        };
        */
    }).

    directive('calculator', function() {
		return {
            templateUrl: 'modules/calculator/directives/template/calculatorBody.html',
			restrict: 'E',
            scope : {},
            controller : "bodyCtrl"
		};
	}).

    controller('bodyCtrl',function($scope) {
        // catch sendhistory Event
        /**
         *
         * @type {string}
         */
        $scope.inputExpr = "";
        /**
         *
         * @param event
         */
        $scope.btnClick = function (event) {
            var input = event.target.innerText;
            $scope.inputExpr += input;
        };

        $scope.result = function(){
            var exp = $scope.inputExpr;
            console.log('exp:'+exp);
            $scope.inputExpr = new String(eval($scope.inputExpr));
            console.info('result:'+$scope.inputExpr);
            console.trace();
            $scope.$emit("sendResult", exp + " = " + $scope.inputExpr);
        };

        $scope.clear = function(){
            $scope.inputExpr = "";
        };

        $scope.$on("returnHistoryToBody", function(e, history){
            $scope.inputExpr = history;
        });

        $scope.$on("enterKey", function (e, keyValue) {
            if(keyValue >= 48 && keyValue <= 57)
                $scope.inputExpr += keyValue-48;
            else if(keyValue >= 96 && keyValue <= 105)
                $scope.inputExpr += keyValue-96;
            else if(keyValue == 46)
                $scope.inputExpr = "";
            else if(keyValue == 189 || keyValue == 109)
                $scope.inputExpr += "-";
            else if(keyValue == 107)
                $scope.inputExpr += "+";
            else if(keyValue == 106)
                $scope.inputExpr += "*";
            else if(keyValue == 111)
                $scope.inputExpr += "/";
            else if(keyValue == 13)
                $scope.result();
        })
    }).

    directive('calhistory', function () {
        return {
            templateUrl:'modules/calculator/directives/template/calculatorHistory.html',
            restrict: "E",
            scope : {},
            controller : "historyCtrl"
        }
    }).

    controller('historyCtrl', function($scope){
        $scope.histories = ['test1', 'test2'];
        $scope.sendHistory= function(history){
            $scope.$emit("returnHistory", history);
        };
        $scope.$on("sendHistory", function(e, history){
            $scope.histories.push(history);
        });
    })

    .config(function($stateProvider){
        $stateProvider
            .state('calculator', {
                url: "/calculator",
                template: '<calculator></calculator>'
            })
            .state('history', {
                url: "/history",
                template: '<calhistory></calhistory>'
            })
    });
