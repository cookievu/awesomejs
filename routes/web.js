module.exports = {
	'police': {
		'*': ['isAuth']
	},

	'get /': 'index',

	'get /login': 'auth/login',
	'post /login': 'auth/loginApi',
	'get /signup': 'auth/signup',
	'post /signup': 'auth/signupApi',
	'get /logout': 'auth/logout',

	'get /new-post': 'newPost',

	'get /profile/:userId': 'profile/index'

}