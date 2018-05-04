let data = {}

module.exports = (req, res) => {
	data['user'] = req.user

	res.render('index', data)
}