module.exports = (req, res) => {
	res.render('index', {
		status: 1,
		message: 'Hello'
	})
}