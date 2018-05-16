module.exports = async (req, res, next) => {
	try {
		if (req.session.userId) {
			const user = await User.findById(req.session.userId)
			if (user.dataValues) {
				req.user = user.dataValues
				req.session.nowInMinutes = Math.floor(Date.now() / 60e3)
			}
			return next()
		}
		return next()
	} catch (err) {
		res.status(500)
		res.send(err)
	}
}