var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({

  getDefaultProps: function () {
    return {
      location: 'Lydney',
      temp: '...'
    }
  },

  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleChange: function (updates) {
    var that = this;
    var location = updates.location;

    // api call
    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
        alert(errorMessage);
        that.setState({isLoading: false});
    });
  },

  render: function () {
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <p>Loading weather...</p>;
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    };

    return (
      <div>
        <h3>Weather Component</h3>
          <WeatherForm onChange={this.handleChange} />
          {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
