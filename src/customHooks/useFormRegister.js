import { useEffect, useState } from "react"
import { useEffectUpdate } from "./useEffectUpdate"

export const useFormRegister = (initialState, cb) => {


    const [fields, setFields] = useState(initialState)

    useEffectUpdate(() => {
        cb?.(fields)
    }, [fields])

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFields(prefFields => ({ ...prefFields, [field]: value }))
    }


    const register = (field) => {
        return {
            onChange: handleChange,
            name: field, 
            id: field,
            value: fields[field]
        }
    }

    return [register]

}