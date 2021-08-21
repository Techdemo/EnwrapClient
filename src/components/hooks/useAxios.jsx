import React from "react";
import { AxiosContext } from '../context/AxiosContext';

export function useAxios() {
  return React.useContext(AxiosContext);
}