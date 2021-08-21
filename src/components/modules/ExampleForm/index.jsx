import React from 'react';
import { useForm } from "react-hook-form";

const ExampleForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    window.alert(data.example);
    console.log(data.example);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="example" {...register("example", { required: true })} />
      <button type="submit">Submit form</button>
    </form>
  )
}

export default ExampleForm;