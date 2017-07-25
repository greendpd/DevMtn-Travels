angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
              url:'/adventurers/',
              templateUrl: "../views/about-adventurers.html"
            })
            .state('contact',{
              url:'/contact',
              templateUrl: "../views/contact.html"
            })
            .state('booked',{
              url:'/booked/:id',
              templateUrl: "../views/booked.html",
              controller: 'bookedC'
            })
            .state('locations',{
              url:'/locations',
              templateUrl: "../views/locations.html",
              controller: 'locationsC'
            })
            .state('packages',{
              url:'/packages/:country',
              templateUrl: "../views/packages.html",
              controller: 'packagesC'
            });

        $urlRouterProvider
            .otherwise('/');
    });
