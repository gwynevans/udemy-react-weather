var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({

  getDefaultProps: function () {
    return {
      city: 'Lydney',
      tempC: '...'
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

    OpenWeatherMap.getTemp(city).then(function (tempC) {
      that.setState({
        city: city,
        tempC: tempC,
        isLoading: false
      });
    }, function (errorMessage) {
        alert(errorMessage);
        that.setState({isLoading: false});
    });
  },

  render: function () {
    var {isLoading, city, tempC} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <p>Loading weather...</p>;
      } else if (city && tempC) {
        return <WeatherMessage city={city} tempC={tempC} />;
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
