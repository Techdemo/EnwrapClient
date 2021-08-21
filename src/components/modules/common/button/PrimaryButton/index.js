import React from 'react';
import { Button } from './styled';

const PrimaryButton = ({ label, action, type }) => {
  return  <Button onClick={action}>{label}</Button>
}

export default PrimaryButton