module.exports = (req, res) => {
	if (req.session.userId) {
		delete req.session.userId
	}
	res.redirect('/')
}