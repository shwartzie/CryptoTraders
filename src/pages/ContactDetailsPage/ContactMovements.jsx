import { StackChart } from '../../cmps/Chart/StackChart.jsx'

export const ContactMovements = ({ contact }) => {
    return (
        <div>
            <StackChart movements={contact.movements}/>
        </div>
    )
}