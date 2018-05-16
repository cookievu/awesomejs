let data = {
	title: 'Chủ đề mới - Awesome'
}

module.exports = (req, res) => {
	data['user'] = req.user

	res.render('index', data)
}