module.exports = (req, res) => {
	if (req.session.userId) {
		req.session.userId = undefined
		return res.redirect('/')
	}
	res.redirect('/')
}