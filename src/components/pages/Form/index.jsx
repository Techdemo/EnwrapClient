import React from "react"
import { useForm, useFieldArray } from "react-hook-form"

const Form = () => {
    const { register, control, handleSubmit} = useForm()
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    })


    return ( 
        <form onSubmit={handleSubmit(console.log(""))}>
            {fields.map(({ id }, index) => {
                return (
                    <div key={id}>
                        <input ref={register()} name={`items[${index}].name`} />
                        <input ref={register()} name={`items[${index}].description`} />
                        <select ref={register()} name={`items[${index}].btw`} />
                        <input ref={register()} type="number" name={`items[${index}].amount`}  />
                        <button type="button" onClick={() => remove(index)}>Remove</button>
                    </div>
                )
            })}
            <button type="button" onClick={() => append({})}>
                Append
            </button>
        </form>
    )
}

export default Form