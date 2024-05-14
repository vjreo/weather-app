const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');


forecast('Charlotte', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

geocode('Charlotte', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});