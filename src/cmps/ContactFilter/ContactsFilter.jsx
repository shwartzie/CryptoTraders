import { memo } from 'react'
import { useFormRegister } from '../../customHooks/useFormRegister';
export const ContactsFilter = memo((props) => {

    const [register] = useFormRegister({
        name: '',
        phone: ''
    }, props.onChangeFilter)

    return (
        <form className='contact-filter'>
            <section>
                <input {...register('name')} type='text' placeholder='Search by name...' />
            </section>
            <section>
                <input {...register('phone')} type="text" placeholder='Search by phone number...' />
            </section>
        </form>
    )
})