// v3.1.0
//Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Brooklyn, NY',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      console.log(weather);
      $("#temp").html(weather.temp);
       $("#temp").html(weather.unit);
      $("#location").html(weather.city);
     // html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
     // html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      //html += '<li class="currently">'+weather.currently+'</li>';
      //html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
   
    //  $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});