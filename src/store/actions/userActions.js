import { userService } from "../../services/userService"


export function sendCurrency({bitcoin, ethereum}) {
    return async (dispatch) => {
        dispatch({ type: 'SEND_CURRENCY', bitcoin, ethereum })
    }
}
 
export function decreaseBalance(user, eth, bitcoin) {
    if (eth) {
        user.balance.ethereum -= eth
    }
    if (bitcoin) {
        user.balance.bitcoin -= bitcoin
    }
    const contact = userService.saveLocalUser(user)
    return async (dispatch) => {
        dispatch({ type: 'UPDATE_USER', loggedInUser: contact})
    }
}

export function login() {
    return async (dispatch) => {
        const user = await userService.login()
        dispatch({ type: 'LOGIN' , loggedInUser: user})
    }
}
