var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({

  getDefaultProps: function () {
    return {
      city: 'Lydney',
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
    var city = updates.city;

    // api call
    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
        alert(errorMessage);
        that.setState({isLoading: false});
    });
  },

  render: function () {
    var {isLoading, city, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <p>Loading weather...</p>;
      } else if (city && temp) {
        return <WeatherMessage city={city} temp={temp} />;
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
