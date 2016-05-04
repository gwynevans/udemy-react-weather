var React = require('react');

var ErrorModal = require('ErrorModal');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({

  getDefaultProps: function () {
    return {
      city: 'Lydney'
    }
  },

  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },

  handleChange: function (city) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
    });

    OpenWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
    });
  },

  render: function () {
    var {isLoading, city, temp, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (city && temp) {
        return <WeatherMessage city={city} temp={temp} />;
      }
    };

    function renderError () {
      if (typeof errorMessage === 'string') {
        return <ErrorModal msg={errorMessage}/>
      }
    };

    return (
      <div>
        <h2 className="text-center">Get Weather</h2>
          <WeatherForm onChange={this.handleChange} />
          {renderMessage()}
          {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
