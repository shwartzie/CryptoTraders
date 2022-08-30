const INITIAL_STATE = {
	loggedInUser: null,
}

export function userReducer(state = INITIAL_STATE, action) {
	const { loggedInUser } = state
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				loggedInUser: action.loggedInUser,
			}

		case 'SPEND_BALANCE':
			return {
				...state,
				loggedInUser: {
					...loggedInUser,
					balance: loggedInUser.balance - action.amount,
				},
			}

		case 'UPDATE_USER':
			return {
				...state,
				loggedInUser: { ...action.loggedInUser },
			}
		default:
			return state
	}
}
