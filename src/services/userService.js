
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    getLoggedinUser,
    saveLocalUser,
}

async function login() {
    const user = {
        fullname:'Roni Shwarzman',
        phone: '+1-51-345-5456',
        email: 'havefun@havingfun.com',
        balance: {
            bitcoin: 10,
            ethereum: 10
        }
    }
    return saveLocalUser(user)
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}




