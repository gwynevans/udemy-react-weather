var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=ad404140255c903493233987e6f15075';

module.exports = {
  getWeather: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return {
          temp: res.data.main.temp,
          name: res.data.name,
          country: res.data.sys.country,
          main: res.data.weather[0].main
        }
      };
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
