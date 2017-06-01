var $ = require('jquery');
var moment = require('moment');

$(function() {
  var date = moment().format('dddd, MMMM Do, YYYY');
  $('.today').html('<p style="color: blue">Hello from jQuery land!<br/>Moment.js says today is ' + date + '.</p>');
});
