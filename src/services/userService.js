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
            sells: _generateRandomAmount(),
            buys: _generateRandomAmount(),
            trades: _generateRandomAmount(),
            datesWhenTraded: [],
            transfers: _generateRandomAmount(),
            profit: _generateRandomAmount()
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

function _generateRandomAmount (a = 1, b = 1000) {
    const container = []
    for(let i = 0; i < 10; i++) {
        container.push(utilService.getRandomInt(a, b))
    }
    return container
}



