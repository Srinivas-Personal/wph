angular.module('rezTrip')
  .filter('isArray', [function() {
    return function(input) {
      return angular.isArray(input);
    };
  }])
.filter('formatpolicydescription', function() {
    return function(text) {
      return  text ? String(text).replace('["', '<p>').replace('"]', '</p>').replace(',',' ') : '';
    }
  }
)
.filter('noFractionCurrency', [function() {
    return function(input) {
        var sum = input ? input.toString().split('.') : [input];

        return sum[0];
    }
  }])
.filter('spacetohyphen', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/\s+/g, '-');
    };
}).filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

    };
}).filter('replacePercent', function () {
    return function (value) {
        return (!value) ? '' : String(value).replace('%', 'percent');
    };
}).filter('replacePipe', function () {
    return function (value) {
        return (!value) ? '' : String(value).replace('|', '');
    };
});
