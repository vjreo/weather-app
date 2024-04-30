const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=apikey&query=Charlotte&units=f';

request({ 
  url: url,
  json: true,
}, 
(error, response) => {
  const weatherDescription = response.body.current.weather_descriptions[0];
  const currentTemp = response.body.current.temperature;
  const feelsLikeTemp = response.body.current.feelslike;
  console.log(`${weatherDescription}. It is currently ${currentTemp} fahrenheit out. It feels like ${feelsLikeTemp} fahrenheit out.`)
});