export const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
  
    const statusCode = err.statusCode || 500
    const message = err.message || "Error interno del servidor"
  
    res.status(statusCode).json({
      error: {
        message,
        stack: process.env.NODE_ENV === "production" ? " " : err.stack,
      },
    })
  }
  
  