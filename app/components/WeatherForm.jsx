var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var city = this.refs.city.value;

    if (city.length > 0) {
      this.refs.city.value = '';
      updates.city = city;
    }

    this.props.onChange(updates);
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="city" placeholder='Enter city'/>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
