var Backbone = require('backbone');
Backbone.$ = require('jquery');

var BlogPostModel = require('../models/blogpostmodel');

module.exports = Backbone.Collection.extend({
	model: blogpostmodel
});