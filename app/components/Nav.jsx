var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();

      var city = this.refs.search.value;
      var encodedCity = encodeURIComponent(city);

      if (city.length > 0) {
        this.refs.search.value = '';
        window.location.hash = '#/?city=' + encodedCity;
      }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li><IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/">Get Weather</IndexLink></li>
            <li><Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/about">About</Link></li>
            <li><Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="search" placeholder="Search weather by city"/></li>
              <li><input type="submit" className="button" value="Get Weather"/></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Nav;
