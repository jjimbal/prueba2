module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,gif,png,jpg,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};