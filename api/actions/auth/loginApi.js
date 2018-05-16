const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (req, res) => {
	const {
		email,
		password
	} = req.body

	if (!email || !password) {
		res.status(400)
		res.json({
			status: 'error',
			message: 'INVALID_FIELD'
		})
	}

	User.findOne({
			email,
			password
		})
		.then(result => {
			if (result) {
				req.session.userId = result.dataValues.id
				return res.json({
					status: 'success',
					message: 'Signup success.'
				})
			}
			res.status(400)
			return res.json({
				status: 'error',
				message: 'Đăng nhập không thành công. Email hoặc mật khẩu không đúng'
			})
		})
		.catch(err => {
			res.status(500)
			res.send(err)
		})
}