const appErrorHandler = (err, req, res, next) => {
    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}

module.exports = appErrorHandler
