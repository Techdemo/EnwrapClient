import { useQuery } from 'react-query'
import { useAxios } from './useAxios';

export default function usePlanets() {
  // Get our Axios instance from our previously created Hook
  const axios = useAxios();

  // Create a query with the key `Planets`
  return useQuery("projects", async () => {
    // Fetch data from our API using Axios. We'll talk about the typing below
    const { data } = await axios.get(
      "http://swapi.dev/api/planets/"
    );

    // Return the data from the Axios response
    return data.results;
  });
}