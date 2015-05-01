angular.module('starter.controllers', ['ionic', 'ngResource'])
//we’ve also opted for an Angular Factory. This makes using a Post easy in our code, and we can treat it as a natural data model:

/*.factory('Post', function($resource) {
  return $resource('/api/post/:id');
})
*/

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}) 

.controller('SetupsCtrl', function($scope, $ionicModal, $timeout, $http) {
    // Form data for the register modal
  $scope.registerData = {};

  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the register modal to close it
  $scope.closeRegister = function() {
    $scope.modal.hide();
  };

  // Open the register modal
  $scope.register = function() {
    $scope.modal.show();
  };

  // Get all posts
  //$scope.posts = Post.query();
  // Our form data for creating a new post with ng-model
  //$scope.postData = {};
  // Perform the register action when the user submits the register form
  $scope.doRegister = function() {

      // Simulate a register delay. Remove this and replace with your register
      // code if using a register system
      // Simple POST request example (passing data) :
      
      $scope.registerData.table = 'gh_users';
      $scope.registerData.has_files = 'false';
      //concat jsons
      console.log('Doing register', $scope.registerData);
      //var post = new Post($scope.postData);
      //post.$save();

      var dataObj = {
          name : "A Name",
          employees : "Employa",
          headoffice : "IT WORKS"
      };  
      var res;
      
      $http({
          url: 'http://www.marabele.com/generic/genericCreate',
          method: "POST",
          data: {application:"kkkk", from:"BBBBB", to:"ccccccc"},
          headers: {'Content-Type': 'application/json'}
      }).success(function (data, status, headers, config) {
          console.log(data);
          $scope.users = data.users; // assign  $scope.persons here as promise is resolved here
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
          console("Ooops "+data);
          console("Error status: "+$scope.status);
      });
      
      /*
    $http.post('http://www.marabele.com/generic/genericCreate', JSON.stringify(dataObj)).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(data);
      });
      */
  };
})
.controller('SetupCtrl', function($scope, $stateParams) {
})

.controller('AdminsCtrl', function($scope) {
  $scope.admins = [
    { title: 'John Smith', id: 1 },
    { title: 'Admin Users', id: 2 },
    { title: 'Thabo Meyer', id: 3 },
    { title: 'James Kolo', id: 4 },
    { title: 'Potego Thiko', id: 5 }
  ];
})

.controller('AdminCtrl', function($scope, $stateParams) {
})

.controller('PersonnelsCtrl', function($scope) {
  $scope.personnels = [
    { title: 'Themba Sibiya', id: 1 },
    { title: 'Harold Lincon', id: 2 },
    { title: 'Leonard Smit', id: 3 },
    { title: 'Jerry Kalange', id: 4 }
  ];
})

.controller('PersonnelCtrl', function($scope, $stateParams) {
})

.controller('SitesCtrl', function($scope) {
  //$scope.sites = [
  //];
})

.controller('SiteCtrl', function($scope, $stateParams) {
})

.controller('PersonnelCtrl', function($scope, $stateParams) {
})

.controller('SchedulesCtrl', function($scope) {
  
})

.controller('ScheduleCtrl', function($scope, $stateParams) {
})

.controller('PayrollssCtrl', function($scope) {
  
})

.controller('PayrollCtrl', function($scope, $stateParams) {
})

.controller('Guard_menusCtrl', function($scope) {
  
})

.controller('Guard_menuCtrl', function($scope, $stateParams) {
})

.controller('MessagingsCtrl', function($scope) {
  
})

.controller('MessagingCtrl', function($scope, $stateParams) {
})

.controller('MessagesCtrl', function($scope) {
    // Open the register modal
  $scope.sendMessage = function() {
    console.log(angular.element('.tbxNewMessage').val());
  };
})

.controller('MessageCtrl', function($scope, $stateParams) {
})

.controller('Time_sheetsCtrl', function($scope) {
  
})

.controller('Time_sheetCtrl', function($scope, $stateParams) {
})

.controller('PatrolsCtrl', function($scope) {
  
})

.controller('PatrolCtrl', function($scope, $stateParams) {
})

.controller('IncidentsCtrl', function($scope) {
  
})

.controller('IncidentCtrl', function($scope, $stateParams) {
})

.controller('Guest_booksCtrl', function($scope) {
  
})

.controller('Guest_bookCtrl', function($scope, $stateParams) {
})

.controller('HelpsCtrl', function($scope) {
  
})

.controller('HelpCtrl', function($scope, $stateParams) {
})

;
