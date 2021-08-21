import React from 'react';
import usePlanets from '../../hooks/usePlanets';

const Prime = () => {
  const { data, status } = usePlanets(); //success, loading, error

  return (
    <>
      <h1>Starwars planets</h1>
      {console.log('status', status)}
      {console.log('data', data)}
    </>
  )
}

export default Prime;