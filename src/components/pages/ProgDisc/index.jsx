import React from 'react';
import { FormProvider, useForm } from "react-hook-form";
import StepOne from './components/Step1';
import StepTwo from './components/Step2';
import StepThree from './components/Step3';
 
const swithFormStep = (element) => {
  switch(element) {
    case 1: 
      return <StepOne />;
    case 2: 
      return <StepTwo />;
    case 3: 
      return <StepThree />
  }
}

const ProgDisc = () => {
  const onSubmit = data => console.log(data);
  const [state, setState] = React.useState(1)
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onsubmit={methods.handleSubmit(onSubmit)}>
        {swithFormStep(state)}
        <input type="submit" />
      </form>
      <div>
        <button onClick={() => setState(1)}>1</button>
        <button onClick={() => setState(2)}>2</button>
        <button onClick={() => setState(3)}>3</button>
      </div>
    </FormProvider>
  )
}

export default ProgDisc;