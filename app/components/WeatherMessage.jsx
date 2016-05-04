var React = require('react');

var WeatherMessage = ({city, temp}) => {
  return (
    <div>
      <p>Temp in {city} is {temp}&deg;C</p>
    </div>
  );

}

module.exports = WeatherMessage;
