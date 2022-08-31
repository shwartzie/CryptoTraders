import { contactService } from '../../services/contactService'

export const loadContacts = () => (async (dispatch, getState) => {
	try {
		const { filterBy } = getState().contactModule
		const contacts = await contactService.query(filterBy)
		dispatch({ type: 'SET_CONTACTS', contacts })
	} catch (err) {
		console.log('err:', err)
	}
})

export const removeContact = (contactId) => (async (dispatch) => {
	try {
		const contact = await contactService.deleteContact(contactId)
		dispatch({ type: 'REMOVE_CONTACT', contactId })
		return contact
	} catch (err) {
		console.log('err:', err)
	}
})

export const addBalance = (updatedContact) => (async (dispatch) => {
	try {
		const contact = await contactService.saveContact(updatedContact)
		dispatch({ type: 'UPDATE_CONTACT', contact })
		return contact
	} catch (err) {
		console.log('err:', err)
	}
})

export const addContact = (newContact) => (async (dispatch) => {
	try {
		const contact = await contactService.saveContact(newContact)
		dispatch({ type: 'ADD_CONTACT', contact })
		return contact
	} catch (err) {
		console.log('err:', err)
	}
})

export const setFilterBy = (filterBy) => (dispatch) =>
	dispatch({ type: 'SET_FILTER_BY', filterBy })

export const updateContacts = (updatedContacts, prevContacts) => (async (dispatch) => {
	try {
		const contacts = await contactService.saveContacts(updatedContacts)
		dispatch({ type: 'UPDATE_CONTACTS', contacts })
	} catch (err) {
		console.log('err:',err);
		dispatch({ type: 'UPDATE_CONTACTS', prevContacts })
	}
})
