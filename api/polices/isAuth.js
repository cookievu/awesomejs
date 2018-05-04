module.exports = (req, res, next) => {
	if (req.session.userId) {
		User.findById(req.session.userId)
		.then(user => {
			if (user) {
				req.user = user.dataValues
				req.session.nowInMinutes = Math.floor(Date.now() / 60e3)
			}
			next()
		})
		.catch(err => {
			console.log(err)
			next()
		})
	} else 
		next()
}