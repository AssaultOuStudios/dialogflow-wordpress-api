const request = require('request');
const api = 'http://diginauts.co.za/wp-json/wp/v2';

let getPosts = (tag, callback) => {
	let url = `${api}/posts?tags=${tag}`;
	request({url}, (err, res, body) => {
		if (err) {
			callback('Sorry, there was an error getting posts from our blog', err)
		} else {
			let posts = JSON.parse(body);
			if (posts.length === 0) {
				callback(`It doesn't seem like there's any content available on this topic`);
			} else {
				let formattedPosts = posts.map((post) => {
					return {
						type: 1,
						platform: 'facebook',
						title: post.title,
						subtitle: post.excerpt.rendered,
						buttons: [
							{
								text: 'Read more',
								link: post.link
							}
						]
					}
				});
				
				callback(undefined, formattedPosts);
			}
		}
	});
}

module.exports = {getPosts};
