import { useEffect, useState } from "react"
import { useEffectUpdate } from "./useEffectUpdate"

export const useForm = (initialState, cb) => {

    const [fields, setFields] = useState(initialState)
    useEffectUpdate(()=>{
        cb?.(fields)
    } ,[fields])

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
    
        if(field === 'bitcoin' || field === 'ethereum') {
            setFields(prefFields => {
                prefFields.balance[field] = value
                return ({ ...prefFields})
            })
        }

        if(field === 'send-bitcoin' || field === 'send-ethereum') {
            const currField =  field === 'send-bitcoin' ? 'bitcoin' : 'ethereum'
            setFields(prefFields => {
                prefFields.balance[currField] += +value
                console.log('prefFields:',prefFields);
                return ({ ...prefFields})
            })
        }

        setFields(prefFields => {
            return ({ ...prefFields, [field]: value })
        })
    }


    return [fields, handleChange, setFields]

}