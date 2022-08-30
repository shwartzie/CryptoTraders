import { contactService } from '../../services/contactService'

export function loadContacts() {
	return async (dispatch, getState) => {
		try {
			const { filterBy } = getState().contactModule
			const contacts = await contactService.query(filterBy)
			dispatch({ type: 'SET_CONTACTS', contacts })
		} catch (err) {
			console.log('err:', err)
		}
	}
}

export function removeContact(contactId) {
	return async (dispatch, getState) => {
		try {
			const contact = await contactService.deleteContact(contactId)
			dispatch({ type: 'REMOVE_CONTACT', contactId })
			return contact
		} catch (err) {
			console.log('err:', err)
		}
	}
}

export function addBalance(updatedContact) {
	return async (dispatch) => {
		try {
            const contact = await contactService.saveContact(updatedContact)
			dispatch({ type: 'UPDATE_CONTACT', contact })
			return contact
		} catch (err) {
			console.log('err:', err)
		}
	}
}

export function addContact(newContact) {
	return async (dispatch) => {
		try {
			const contact = await contactService.saveContact(newContact)
			dispatch({ type: 'ADD_CONTACT', contact })
			return contact
		} catch (err) {
			console.log('err:', err)
		}
	}
}

export function setFilterBy(filterBy) {
	return (dispatch) => {
		dispatch({ type: 'SET_FILTER_BY', filterBy })
	}
}
