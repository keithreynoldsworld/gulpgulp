var React = require('react');
var BLOGPOSTMODEL = require('../models/blogpostmodel');


module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<form onSubmit={this.blogpostpalooza}>
					<input ref='title' type='text' />
					<input ref='body' type='test' />
					<button type='submit'>blogit, baby!</button>
				</form>
			</div>
		);
	},
	blogpostpalooza: function(e) {
		e.preventDefault();
		var BLOGPOST = new BLOGPOSTMODEL({
			title: this.refs.title.getDOMNode().value,
			title: this.refs.title.getDOMNode().value,
			dateOfCreation: new Date()
		})
		if(BLOGPOST.title==="") {
			console.log('title can not be blank');
		} 

		else if(BLOGPOST.body===""){
			console.log('body can not be blank')
		}

		else {
			console.log(COMMENT);
		}
	}
});