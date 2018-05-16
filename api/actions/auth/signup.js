module.exports = (req, res) => {
	if (req.session.userId) {
		res.redirect('/')
	}
	res.render('auth/signup')
}