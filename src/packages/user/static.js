import lodash from 'lodash'

const userRole = {
    commonUser: 3,
    editor: 2,
    admin: 1
}

async function commonUserData(user) {
    return lodash.pick(user, ['_id', 'email', 'role'])
}

export default {
    userRole,
    commonUserData
}