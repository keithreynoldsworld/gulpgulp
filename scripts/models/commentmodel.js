var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({

	default: {
		message : null,
		blogpost_id: null,
		user_id: null,
		dateofcreation: null
	}


});