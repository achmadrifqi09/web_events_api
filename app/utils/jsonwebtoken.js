const jsonWebToken = require('jsonwebtoken')
const { secretKey, expiredToken } = require('../configs/config')

const createJWT = ({ payload }) => {
    const token = jsonWebToken.sign(payload, secretKey, {
        expiresIn: expiredToken,
    })
    return token
}

const isTokenValid = ({ token }) => jsonWebToken.verify(token, secretKey)

module.exports = { createJWT, isTokenValid }
