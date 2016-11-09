(function() {
  angular
    .module('rezTrip', ['ui.date'], function($interpolateProvider) {
      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
    })
    .value('rt3api', new Rt3Api({
      portalId: 'wphsouthbeach',
      hotelId: 'MIAWPH',
      defaultLocale: 'en',
      defaultCurrency: 'USD'
    }))
   .config(function($locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
      });
    })

    .directive('onSearchChanged', function (rt3Search) {
      return {
        scope: false,
        restrict: 'A',
        link: function (scope, element, attrs) {
          scope.$watch('search.params', function (params) {
            if (params.arrival_date && params.departure_date) {
              scope.$eval(attrs.onSearchChanged);
            }

          }, true);

          scope.$eval(attrs.onSearchChanged);
        }
      };
    })
    .controller('roomDetail', ['$scope', 'rt3Search', 'rt3Browser','$timeout', function($scope, rt3Search, rt3Browser,$timeout) {
        $timeout(function() {
           var roomsList = JSON.parse($("#roomList").val());
           var roomId = $("#roomId").val();
           var roomSizeSqm;
           var roomSizeSqft;
           for(var j= 0 ; j < roomsList.length ; j++){
               if(roomsList[j].code.toLowerCase() == roomId.toLowerCase()){
                  $scope.selectedRoom = roomsList[j];
                  break;
               }
           }

        }, 2000);

    }])
    .controller('bookingWidget', ['$scope', 'rt3Search', 'rt3Browser', function($scope, rt3Search, rt3Browser) {
      var self = this;

      this.arrivalOptions = {
        minDate: 0
      }
      this.departureOptions = {
        minDate: 1
      }// Todo move to service

      //added hide option
      this.chachgeMaxDate = function(target) {

       $('.-second').find('.booking-widget_accord_content').slideUp('slow');
       $('.-second').find('.booking-widget_accord_toggler').removeClass('-show');
       //$('.-second').find('.booking-widget_accord_content').css('display','none');
        }
        //

      // Todo move to service
      this.chachgeMinDate = function(target) {
       //added hide option
       $('.-first').find('.booking-widget_accord_content').slideUp('slow');
       $('.-first').find('.booking-widget_accord_toggler').removeClass('-show');
       $('.-second').find('.booking-widget_accord_content').slideDown('slow');
       $('.-second').find('.booking-widget_accord_toggler').addClass('-show');
       $('.-second').find('.booking-widget_accord_content').css('display','block');
        //

        var today = new Date().getDate();
        var arr = new Date($scope.search.params.arrival_date).getDate();
        var arrm = new Date($scope.search.params.arrival_date).getMonth();
        var gettonightstatus= rt3Browser.roomsTonight.length;

        if(gettonightstatus == 0)
        {
          $(".price").hide();
        }

        //console.log(gettonightstatus);*/
        if (target == 'departure') {
         var dept= new Date($scope.search.params.arrival_date);
          var theDay=new Date(dept.setDate(dept.getDate() + 1));
          var newDay=theDay.toISOString().slice(0,10);
          $scope.search.params.departure_date=newDay;
          self.departureOptions.minDate=(theDay.getDate()-today);


        }
      }
    }
    ]);
})();
