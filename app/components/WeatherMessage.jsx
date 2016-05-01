var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {city, tempC} = this.props;

    return (
      <div>
        <p>Weather in {city} is {tempC}&deg;C</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
