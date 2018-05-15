// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .



const productSchoolLat = "37.796465"
const productSchoolLng = "-122.402492"

$.ajax({
  url: '/api/v1/weather',
  type: 'GET',
  data: { lat: productSchoolLat, lng: productSchoolLng } ,
  contentType: 'application/json; charset=utf-8',
  success: function (response) {
    console.log(response); 
    var weatherContainer = $('<div>');
    var tempContainer = $('<div>');
    weatherContainer.html(response.currently.summary);
    tempContainer.html(Math.ceil(response.currently.temperature) + "&deg;");
    $('body').prepend(weatherContainer);
    $('body').prepend(tempContainer);
  },
  error: function (error) {
    console.log(error);
  }
});
