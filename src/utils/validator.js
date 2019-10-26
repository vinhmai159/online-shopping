export default {
    regex: {
        objectId: /^[0-9a-fA-F]{24}$/,
        phone: /^\+?1?(\d{10,12}$)/,
        email: /\S+@\S+\.\S+/,
        password: /^[a-f0-9]{32}$/
    }
}
