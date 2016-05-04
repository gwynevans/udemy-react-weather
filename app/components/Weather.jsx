var React = require('react');

var ErrorModal = require('ErrorModal');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({
  componentDidMount: function () {
    var city = this.props.location.query.city;

    if (city && city.length > 0) {
      this.handleSearch(city);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function (newProps) {
    var city = newProps.location.query.city;

    if (city && city.length > 0) {
      this.handleSearch(city);
      window.location.hash = '#/';
    }
  },

  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },

  handleSearch: function (city) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      city: undefined,
      temp: undefined
    });

    OpenWeatherMap.getWeather(city).then(function (data) {
      var {temp, main, name, country} = data;
      that.setState({
        name: name,
        temp: temp,
        country: country,
        main: main,
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
    var {isLoading, country, main, name, temp, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (name && temp) {
        return <WeatherMessage country={country} main={main} name={name} temp={temp} />;
      }
    };

    function renderError () {
      if (typeof errorMessage === 'string') {
        return <ErrorModal msg={errorMessage}/>
      }
    };

    return (
      <div>
        <h2 className="text-center page-title">Get Weather</h2>
          <WeatherForm onChange={this.handleSearch} />
          {renderMessage()}
          {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
