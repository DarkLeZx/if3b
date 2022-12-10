const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')

    // Jika Tidak Ada Request Header Authentication
    // Berikan Status 400 Untuk Acces Denied
    if (!token) return res.status(400).json({
        status: res.statusCode,
        message: 'Access denied'
    })

    try {
        // Verify token dengan Scret Key
        const verified = jwt.verify(token, process.env.SECRET_KEY) // verify
        res.user = verified
        next() // melanjutkan proses berikutnya
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Invalid token'
        })
    }
}

module.exports = verifyToken