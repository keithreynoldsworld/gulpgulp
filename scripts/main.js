var React = require('react');
var InstagramImage = require('./components/image');
var InstagramComment = require('./components/comment');
var BlogListComponent = require('./components/blogpostCOM.js');
React.render(
	<InstagramImage imageUrl="http://wdy.h-cdn.co/assets/cm/15/10/54f5f978eea3a_-_01-pickle-on-white-lgn-41585088.jpg"/>,
	document.getElementById('container')
);
//yo react-backbone