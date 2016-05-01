var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {location, temp} = this.props;

    return (
      <div>
        <p>Weather in {location} is {temp}&deg;C</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
