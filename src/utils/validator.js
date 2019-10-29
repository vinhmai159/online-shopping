export default {
    regex: {
        objectId: /^[0-9a-zA-Z]{24}$/,
        phone: /^\+?1?(\d{10,12}$)/,
        email: /\S+@\S+\.\S+/,
        password: /^[a-z0-9]{8,}$/
    }
}
