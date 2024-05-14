const request = require('postman-request');
const geocode = require('./utils/geocode');

// const url = '';

// request({ 
//   url: url,
//   json: true,
// }, 
// (error, response) => {
//   if (error) {
//     console.log(`Unable to connect to weather service.`);
//   } else if (response.body.error) {
//     console.log(`Unable to find location.`);
//   } else {
//     const weatherDescription = response.body.current.weather_descriptions[0];
//     const currentTemp = response.body.current.temperature;
//     const feelsLikeTemp = response.body.current.feelslike;

//     console.log(`${weatherDescription}. It is currently ${currentTemp} fahrenheit out. It feels like ${feelsLikeTemp} fahrenheit out.`)
//   }
// });


geocode('Charlotte', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});