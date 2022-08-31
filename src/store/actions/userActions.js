import { userService } from "../../services/userService"


export function sendCurrency({ bitcoin, ethereum }) {
    return async (dispatch) => {
        dispatch({ type: 'SEND_CURRENCY', bitcoin, ethereum })
    }
}

export function decreaseBalance(currUser, eth, bitcoin) {
    const user = JSON.parse(JSON.stringify(currUser))
    user.balance['ethereum'] -= +eth
    user.balance['bitcoin'] -= +bitcoin
    const loggedInUser = userService.saveLocalUser(user)
    return async (dispatch) => {
        dispatch({ type: 'UPDATE_USER', loggedInUser })
    }
}

export function login() {
    return async (dispatch) => {
        const user = await userService.login()
        dispatch({ type: 'LOGIN', loggedInUser: user })
    }
}

export function depositCurrency({ balance: { bitcoin, ethereum } }) {
    return async (dispatch, getState) => {
        try {
            const user = JSON.parse(JSON.stringify(getState().userModule.loggedInUser))
            user.balance['bitcoin'] += bitcoin
            user.balance['ethereum'] += ethereum
            const loggedInUser = userService.saveLocalUser(user)
            dispatch({type: 'UPDATE_USER', loggedInUser})
        } catch (err) {

        }

    }
}
