var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h2 className="text-center page-title">Examples</h2>
      <p>Here are a few example cities to try out:</p>
      <ol>
        <li><Link to='/?city=Lydney'>Lydney</Link></li>
        <li><Link to='/?city=Gloucester'>Gloucester</Link></li>
        <li><Link to='/?city=Annapolis'>Annapolis</Link></li>
        <li><Link to='/?city=Birmingham'>Birmingham, Alabama</Link></li>
        <li><Link to='/?city=Birmingham,UK'>Birmingham, UK</Link></li>
      </ol>
    </div>
  )
};

module.exports = Examples;
