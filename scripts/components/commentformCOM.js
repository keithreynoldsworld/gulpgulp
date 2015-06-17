var React = require('react');
var COMMENTMODEL = require('../models/commentmodel');



module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<form onSubmit={this.commentpalooza}>
					<input ref='user-comment' type='text' />
					<button type='submit'>tell it like it is</button>
				</form>
			</div>
		);
	},
	commentpalooza: function(e) {
		e.preventDefault();
		var COMMENT = new COMMENTMODEL({
			text: this.refs.user-comment.getDOMNode().value,
			dateOfCreation: new Date()
		})
		if(COMMENT==="") {
			console.log('comment can not be blank');
		} else {
			console.log(COMMENT);
		}
	}
});