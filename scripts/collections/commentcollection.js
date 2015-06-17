var Backbone = require('backbone');
Backbone.$ = require('jquery');

var BlogPostModel = require('../models/commentmodel');

module.exports = Backbone.Collection.extend({
	model: commentmodel
});