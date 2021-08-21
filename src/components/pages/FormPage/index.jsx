import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const FormPage = () => {
  const { control, register, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "dataArray",
  });

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            name="title"
            {...register(`dataArray.${index}.title`)} 
            defaultValue={field.value}
            placeholder="Titel"
          />
          <input
            {...register(`dataArray.${index}.description`)} 
            defaultValue={field.value}
            placeholder="Omschrijving"
          />
          <input
            {...register(`dataArray.${index}.price`)} 
            defaultValue={field.value}
            placeholder="Bedrag"
          />
          <input
            {...register(`dataArray.${index}.amount`)} 
            defaultValue={field.value}
            placeholder="Hoeveelheid"
          />
          <select
            {...register(`dataArray.${index}.btw`)}
          >
            <option value="" selected="selected" disabled defaultValue={field.value}>Selecteer BTW</option>
            <option value="0">0%</option>
            <option value="9">9%</option>
            <option value="21">21%</option>
          </select>
          <button type="button" onClick={() => remove(index)}>Remove</button>
        </div>
      ))}
        <input type="submit" />
        <button type="button" onClick={() => append({})}>
          Add product
        </button>
        <button type="button" onClick={() => remove()}>Remove All</button>
      </form>
    </>
  );
}

export default FormPage;