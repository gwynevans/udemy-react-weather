var React = require('react');

var WeatherMessage = ({country, main, name, temp}) => {
  return (
    <div>
      <h4 className="text-center">Current weather in {name} ({country}) is {main} &amp; {temp}&deg;C</h4>
    </div>
  );

}

module.exports = WeatherMessage;
