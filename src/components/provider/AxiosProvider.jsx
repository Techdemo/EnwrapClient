import React from 'react';
import axios from 'axios';

import { AxiosContext } from '../context/AxiosContext';

export default function AxiosProvider ({ children }) {
  const axiosResult = React.useMemo(() => {
  
    const axiosCreate = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });

    axiosCreate.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return axiosCreate;
  }, []);

  return (
    <AxiosContext.Provider value={axiosResult}>{children}</AxiosContext.Provider>
  )
}


