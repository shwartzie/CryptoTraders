import { memo } from 'react'
import { useFormRegister } from '../../customHooks/useFormRegister';
export const ContactsFilter = memo((props) => {

    const [register] = useFormRegister({
        fullname: '',
        phone: '',
        balance: {
            bitcoin: 0,
            ethereum: 0
        }
    }, props.onChangeFilter)

    return (
        <form className='contact-filter'>
            <section>
                <input {...register('fullname')} type='text' name="fullname" placeholder='Search by name...' />
            </section>
            <section>
                <input {...register('phone')} type="text" ame="phone" placeholder='Search by phone number...' />
            </section>
            {/* <section>
                <input {...register('bitcoin')} type='number' placeholder='Filter by highest bitcoin holder...'/>
            </section>
            <section>
                <input {...register('ethereum')} type='number' placeholder='Filter by highest ethereum holder...'/>
            </section> */}
        </form>
    )
})