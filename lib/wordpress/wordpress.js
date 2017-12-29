const request = require('request');
const api = 'http://diginauts.co.za/wp-json/wp/v2';

let getPosts = (tag) => {
	let url = `${api}/posts?tags=${tag}`;
	request({url}, (err, res, body) => {
		if (err) {
			return 'Sorry, there was an error getting your WP posts'
		} else {
			let posts = JSON.parse(body);
			if (posts.length === 0) {
				return 'No posts were found for this tag';
			} else {
				return 'There are posts';
			}
		}
	});
}

module.exports = {getPosts};
