var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({

	default: {
		username : null,
		full-name: null,
		_id: null,
		dateofcreation: null
		password: null
	}


});