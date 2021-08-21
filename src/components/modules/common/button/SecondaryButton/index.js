import React from 'react';
import { Button } from './styled';

const SecondaryButton = ({ label, action }) => {
  return <Button onClick={action}>{label}</Button>
}

export default SecondaryButton