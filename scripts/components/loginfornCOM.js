var React = require('react');
var USERMODEL = require('../models/usermodel');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<form onSubmit={this.loginpalooza}>
					<input ref='user-name' type='text' />
					<input ref='user-password' type='text' />
					<button type='submit'>PRESS ME</button>
				</form>
			</div>
		);
	},
	loginpalooza: function(e) {
		e.preventDefault();
		var newusermodel = new USERMODEL({
			username: this.refs.user-name.getDOMNode().value,
			password: this.refs.user-password.getDOMNode().value,
			dateOfCreation: new Date()
		})
		if(USERMODEL.name==="") {
			console.log('user name can not be blank');
		} 
		else if(USERMODEL.password===""){
			console.log('you must enter a password');
		}


		else {
			console.log(USERMODEL);
		}
	}
});