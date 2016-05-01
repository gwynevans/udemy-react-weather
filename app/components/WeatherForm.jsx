var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      updates.location = location;
    }

    this.props.onChange(updates);
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="location" placeholder='Enter location'/>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
