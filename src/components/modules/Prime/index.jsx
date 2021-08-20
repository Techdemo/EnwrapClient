import React from 'react';
import { useQuery } from 'react-query'

const ExampleFetcher = () => async () => {
  const res = await fetch('http://swapi.dev/api/planets/')
  return res.json()
}

const Prime = () => {
  const { data, status } = useQuery('planets', ExampleFetcher()) //success, loading, error

  return (
    <>
      <h1>Starwars planets</h1>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading...</div>}

      {status === 'success' && (
        <div>
          {data.results.map((planet, i) => (
            <p key={i}>{planet.name}</p>
          ))}
          {console.log(data.results)}
        </div>
      )}
    </>
  )
}

export default Prime;