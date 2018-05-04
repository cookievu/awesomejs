module.exports = (req, res) => {
	const {
		first,
		email,
		password
	} = req.body

	if (!first || !email || !password) {
		res.status(400)
		res.json({
			status: 'error',
			message: 'INVALID_FIELD'
		})
	}

	User.create({
			first,
			email,
			password
		})
		.then(result => {
			req.session.userId = result.dataValues.id
			res.json({
				status: 'success',
				message: 'Signup success.'
			})
		})
		.catch(err => {
			if (err.errors && err.errors.length) {
				res.status(400)
				return res.json({
					status: 'error',
					message: err.errors[0].message
				})
			}
			res.status(500)
			res.send(err)
		})
}