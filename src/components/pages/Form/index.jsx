import React from "react"
import { useForm, useFieldArray } from "react-hook-form"

const Form = () => {
    const { register, control, handleSubmit} = useForm()
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    })


    return ( 
        <form onSubmit={handleSubmit(console.log)}>
            {fields.map(({ id }, index) => {
                return (
                    <div key={id}>
                        <input ref={register()} name={`items[${index}].name`} placeholder="title" />
                        <input ref={register()} name={`items[${index}].description`} placeholder="description" />
                        <input ref={register()} type="number" name={`items[${index}].price`} placeholder="price"  />
                        <input ref={register()} type="number" name={`items[${index}].amount`} placeholder="amount"  />
                        <select ref={register()} name={`items[${index}].btw`} placeholder="btw" >
                            <option value="0">0%</option>
                            <option value="9">9%</option>
                            <option value="21">21%</option>
                        </select>
                        <button type="button" onClick={() => remove(index)}>Remove</button>
                    </div>
                )
            })}
            <button type="button" onClick={() => append({})}>
                Append
            </button>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form