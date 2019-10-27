function build(statusCode, data = {}, message = {}) {
    return {
        statusCode,
        message,
        data
    }
}

const statusCode = {
    success: 200,
    error: 400
}

const message = {
    success: "Success",
    error: "Error"
}
export default {
    build,
    statusCode,
    message
}
