var React = require('react');

var WeatherMessage = ({city, temp}) => {
  return (
    <div>
      <h4 class-name="text-center">Temp in {city} is {temp}&deg;C</h4>
    </div>
  );

}

module.exports = WeatherMessage;
