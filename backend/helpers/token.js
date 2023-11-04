const jwt = require('jsonwebtoken');
const sign = process.env.JWT_SERCRET;

function generate (data) {
    return jwt.sign(data, sign, {expiresIn: '30d'})
}

function verify (token) {
    return jwt.verify(token, sign);
}

module.exports = {
    generate,
    verify
}