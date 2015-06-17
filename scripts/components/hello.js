var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<div ref="helloText">Hello React</div>
				<button onClick={this.buttonClick}>Click me!</button>
			</div>
		);
	},
	buttonClick: function(e){
		console.log('the button was clicked');
		this.refs.helloText.getDOMNode().innerHTML = 'The buton was clicked';
	}
});
