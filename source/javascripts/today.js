var $ = require('jquery');
var moment = require('moment')

$(function() {
  var date = moment().format('dddd, MMMM Do, YYYY');
  $('#today').html('<p>Today is ' + date + '.</p>');
});
