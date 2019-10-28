function build(statusCode, data = {}, message = {}) {
    return {
        statusCode,
        message,
        data
    }
}

const statusCode = {
    success: 200,
    error: 400,
    unauthorized: 401,
    notFound: 404
}

const message = {
    success: "Success",
    error: "Error",
    notFound: "Not found",
    unauthorized: "Unauthorized"
}
export default {
    build,
    statusCode,
    message
}
