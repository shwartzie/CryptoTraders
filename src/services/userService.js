import { utilService } from "./utilService"

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    getLoggedinUser,
    saveLocalUser,
}

async function login() {
    const user = {
        _id: utilService.makeId(24),
        fullname:'Roni Shwarzman',
        phone: '+1-51-345-5456',
        email: 'havefun@havingfun.com',
        balance: {
            bitcoin: 10,
            ethereum: 10
        },
        movements: {
            sells: 0,
            buys: 0,
            trades: 0,
            datesWhenTraded: [],
            transfers: [],
            profit: 0
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




