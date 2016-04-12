let React = require('react');
let ReactDOM = require('react-dom');

const Index = React.createClass({
  render() {
    return (
      <div>Hello World!</div>
    );
  }
});

ReactDOM.render(<Index />, document.getElementById("container"));
