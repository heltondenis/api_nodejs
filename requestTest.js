var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=SaoPaulo&APPID=604b9d1c6b9e0b3e94b0b3ffd01fe6ba', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var parsedWeather = JSON.parse(body);
  console.log('A temperatura atual em São Paulo é ' + parsedWeather['main']['temp']); // Print the Temperature in the city of São Paulo
});