import { createRef, forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ContactListPreview } from './ContactListPreview'
import { setFilterBy, loadContacts, removeContact, updateContacts } from '../../store/actions/contactActions'
import { ContactsFilter } from '../ContactFilter/ContactsFilter'
import { useNavigate } from "react-router-dom"
import { ContactPreviewDetails } from './ContactPreviewDetails.jsx'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'

export const ContactList = () => {
    const contacts = useSelector(state => state.contactModule.contacts)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [contact, setPreview] = useState(null)
    const updatedContacts = contacts && contacts.slice()
    useEffect(() => {
        dispatch(loadContacts())
    }, [])

    const updateList = ({ index: srcIdx }, destination) => {
        const { index: destIdx } = destination
        if (!destination) return contacts

        const [contact] = updatedContacts.splice(srcIdx, 1)
        updatedContacts.splice(destIdx, 0, contact)
        return updatedContacts
    }

    const onChangeFilter = useCallback((filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadContacts())
    }, [])

    const onRemoveContact = async (contactId, ev) => {
        ev.stopPropagation()
        await dispatch(removeContact(contactId))

    }

    const onAddContact = () => {
        navigate(`/contact/edit/`)
    }

    const contactPreview = (contact) => {
        setPreview(contact)
    }

    //dnd styling
    const grid = 8
    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "white",
    })
    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: "none",
        margin: `0 0 ${grid}px 0`,
        background: isDragging ? "lightgreen" : "white",
        ...draggableStyle
    })

    return (
        <DragDropContext onDragEnd={({ source, destination }) => {
            dispatch(updateContacts(updateList(source, destination), contacts))
        }}>
            <div className='contact-list-container'>
                <div className='layout'>
                    <div className='contact-list-header-actions'>
                        <ContactsFilter onChangeFilter={onChangeFilter} />
                        <button onClick={onAddContact}> Add Contact </button>
                    </div>
                    <main className='contact-list-layout'>
                        <Droppable droppableId='droppable-1'>
                            {(providedDroppable, snapshot) => (
                                <div
                                    className='contact-list-main-container'
                                    ref={providedDroppable.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {contacts && contacts.map((contact, index) => (
                                        <Draggable
                                            key={contact._id}
                                            draggableId={`draggable-${contact._id}`}
                                            index={index}
                                        >
                                            {(providedDraggable, snapshot) => (
                                                <div
                                                    ref={providedDraggable.innerRef}
                                                    {...providedDraggable.draggableProps}
                                                    {...providedDraggable.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        providedDraggable.draggableProps.style
                                                    )}
                                                >
                                                    <ContactListPreview
                                                        contact={contact}
                                                        onRemoveContact={onRemoveContact}
                                                        contactPreview={contactPreview}
                                                        
                                                    />
                                                    {providedDroppable.placeholder}

                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                    )}
                                </div>
                            )}
                        </Droppable>
                        {contact && <article className='contact-modal-preview'>
                            <ContactPreviewDetails contact={contact} />
                        </article>}
                    </main>
                </div>
            </div >
        </DragDropContext>
    )
}



