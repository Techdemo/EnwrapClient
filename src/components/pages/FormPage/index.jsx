import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const FormPage = () => {
  const { control, register, handleSubmit } = useForm();
  const { fields, append } = useFieldArray({
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
        <input
          key={field.id}
          {...register(`test.${index}.value`)} 
          defaultValue={field.value}
        />
      ))}
        <input type="submit" />
        <button type="button" onClick={() => append({})}>
          Add product
        </button>
      </form>
    </>
  );
}

export default FormPage;