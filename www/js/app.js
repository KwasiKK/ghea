// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.setup', {
    url: "/setup",
    views: {
      'menuContent': {
        templateUrl: "templates/setup.html",
        controller: 'SetupsCtrl'
      }
    }
  })

  .state('app.admins', {
    url: "/admins",
    views: {
      'menuContent': {
        templateUrl: "templates/admins.html",
        controller: 'AdminsCtrl'
      }
    }
  })    

  .state('app.company', {
    url: "/company",
    views: {
      'menuContent': {
        templateUrl: "templates/company.html"
      }
    }
  })
    .state('app.personnels', {
      url: "/personnels",
      views: {
        'menuContent': {
          templateUrl: "templates/personnels.html",
          controller: 'PersonnelsCtrl'
        }
      }
    })

    .state('app.sites', {
      url: "/sites",
      views: {
        'menuContent': {
          templateUrl: "templates/sites.html",
          controller: 'SitesCtrl'
        }
      }
    })

    .state('app.schedules', {
      url: "/schedules",
      views: {
        'menuContent': {
          templateUrl: "templates/schedules.html",
          controller: 'SchedulesCtrl'
        }
      }
    })    

    .state('app.payrolls', {
      url: "/payrolls",
      views: {
        'menuContent': {
          templateUrl: "templates/payrolls.html",
          controller: 'PayrollCtrl'
        }
      }
    })

    .state('app.guard_menus', {
      url: "/guard_menus",
      views: {
        'menuContent': {
          templateUrl: "templates/guard_menus.html",
          controller: 'Guard_menuCtrl'
        }
      }
    })

    .state('app.messagings', {
      url: "/messagings",
      views: {
        'menuContent': {
          templateUrl: "templates/messagings.html",
          controller: 'MessagingCtrl'
        }
      }
    })        

    .state('app.messages', {
      url: "/messages",
      views: {
        'menuContent': {
          templateUrl: "templates/messages.html",
          controller: 'MessagingCtrl'
        }
      }
    })        


    .state('app.time_sheets', {
      url: "/time_sheets",
      views: {
        'menuContent': {
          templateUrl: "templates/time_sheets.html",
          controller: 'Time_sheetCtrl'
        }
      }
    })  

    .state('app.patrols', {
      url: "/patrols",
      views: {
        'menuContent': {
          templateUrl: "templates/patrols.html",
          controller: 'PatrolCtrl'
        }
      }
    }) 

    .state('app.incidents', {
      url: "/incidents",
      views: {
        'menuContent': {
          templateUrl: "templates/incidents.html",
          controller: 'IncidentCtrl'
        }
      }
    })                    

    .state('app.guest_books', {
      url: "/guest_books",
      views: {
        'menuContent': {
          templateUrl: "templates/guest_books.html",
          controller: 'Guest_bookCtrl'
        }
      }
    })  

    .state('app.help', {
      url: "/help",
      views: {
        'menuContent': {
          templateUrl: "templates/help.html",
          controller: 'HelpsCtrl'
        }
      }
    })                        

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/setup');
});
