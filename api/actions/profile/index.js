let data = {
	title: 'Profile'
}

module.exports = async (req, res) => {

	const { userId } = req.params
	data['user'] = req.user

	try {
		const profile = await User.findById(userId)
		data['profile'] = profile.dataValues
		data['title'] = data['profile'].first

		console.log(data.profile)

		res.render('profile/index', data)
	} catch (err) {
		res.status(500)
		res.send(err)
	}
}