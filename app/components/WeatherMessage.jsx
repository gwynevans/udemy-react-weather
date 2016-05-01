var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {city, temp} = this.props;

    return (
      <div>
        <p>Weather in {city} is {temp}&deg;C</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
