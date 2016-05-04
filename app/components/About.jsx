var React = require('react');
var {a} = require('react-router');

// Stateless component and arrow function

var About = (props) => {
  return (
    <div>
      <h2 className="text-center page-title">About</h2>
      <p>An example Weather app from "The Complete React Web App Developer Course" Udemy course by Andrew Mead.</p>
      <p>Some relevant links:</p>
      <ul>
        <li><a href='https://facebook.github.io/react/'>React</a> (JavaScript UI library) -
            <a href='https://facebook.github.io/react/docs/getting-started.html'>Docs</a> &amp;&nbsp;
            <a href='https://facebook.github.io/react/docs/component-api.html'>Component API</a>
        </li>
        <li><a href='https://github.com/reactjs/react-router'>React Router</a> (routing library for React) -
            <a href='https://github.com/reactjs/react-router/blob/master/docs'> Docs</a> &amp;
            <a href='https://github.com/reactjs/react-router/blob/master/docs/API.md'> API</a>
        </li>
        <li><a href='http://foundation.zurb.com/sites.html'>Foundation for Sites 6</a> (front-end framework) -
            <a href='http://foundation.zurb.com/sites/docs/'>Docs</a> &amp;
            <a href='http://foundation.zurb.com/sites/docs/kitchen-sink.html'> Kitchen Sink</a>
        </li>
        <li><a href='http://openweathermap.org/'>OpenWeatherMap</a> (date source) -
            <a href='http://openweathermap.org/api'> API docs</a> &amp;
            <a href='http://openweathermap.org/current#one'> Current weather data API</a>
        </li>
        <li><a href='https://github.com/gwynevans/udemy-react-weather'>Source</a> on GitHub</li>
        <li>Heroku <a href='https://dashboard-preview.heroku.com/apps'>Dashboard</a></li>
        <li><a href='https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview'>Udemy "Complete React..." course</a></li>
      </ul>
    </div>
  );
}

module.exports = About;
