var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		title: null,
		test: null,
		user_id: null,
		taglist: null

	}
});