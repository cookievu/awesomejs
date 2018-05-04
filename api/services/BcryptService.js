const bcrypt = require('bcrypt');

module.exports = {
  encrypt: (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return reject(err);
        bcrypt.hash(password, salt, (hasErr, hash) => {
          if (hasErr) return reject(hasErr);
          return resolve(hash);
        });
      });
    })
  },

  compare: (password, hashPassword) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hashPassword, (err, res) => {
        if (err) return reject(err);
        return resolve(res);
      });
    })
  }

}