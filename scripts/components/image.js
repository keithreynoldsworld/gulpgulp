var React = require('react');
var Comments = require('./comment')
module.exports = React.createClass({

	render: function() {
		return (
			<div className="image">
				<img src={this.props.imageUrl} />
				<div className="comment">
				<Comments/>
				</div>

			</div>

			);
	}




});