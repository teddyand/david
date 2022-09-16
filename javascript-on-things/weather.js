const request = require('request');
const five    = require('johnny-five');

const API_KEY = '05bdbc266ea7dcb6c9456e6bdd99a0fa';
const AREA_CODE= '110108';
const API_URL = 'https://restapi.amap.com/v3/weather/weatherInfo?';

const board   = new five.Board();

board.on('ready', () => {
  console.log('Powered by Dark Sky: https://lbs.amap.com/');
  const rgb        = new five.Led.RGB({ pins: [3, 5, 6] });
  const requestURL = `${API_URL}key=${API_KEY}&city=${AREA_CODE}&extensions=all`;

  request(requestURL, function (error, response, body) {
    if (error) {
      console.error(error);
    } else if (response.statusCode === 200) {
      const forecast   = JSON.parse(body);
      const daily      = forecast.forecasts;
      const cast    = daily[0]['casts'];
      //const willBeDamp = daily[1].precipProbability > 0.2;
      const willBegale = cast[0]['daypower'] == '≥7';
      const tempDelta  = daily[0]['casts'][1]['daytemp'] - daily[0]['casts'][0]['daytemp'];
      console.log(forecast);
      console.log(cast);
      console.log(cast[1]['daytemp']);
      console.log(cast[0]['daytemp']);
      console.log(cast[0]['daypower']);

      if (tempDelta > 4) {
        rgb.color('#ff0000'); // warmer
      } else if (tempDelta < -4) {
        rgb.color('#ffffff'); // colder
      } else {
        rgb.color('#00ff00'); // about the same
      }
      if (willBegale) { rgb.strobe(1000); }
    }
  });
});
