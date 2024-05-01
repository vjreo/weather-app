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

const mapboxUrl = 'https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=access_token';

request({
  url: mapboxUrl,
  json: true,
},
(error, response) => {
  const longitude = response.body.features[0].properties.coordinates.longitude;
  const latitude = response.body.features[0].properties.coordinates.latitude;
  console.log(`The coordinates for Los Angeles are | Longitude: ${longitude}, Latitude: ${latitude} |`);
});