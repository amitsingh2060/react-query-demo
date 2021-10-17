
import axios from 'axios'


import { useQuery } from 'react-query'
const dataFetch =  () => {
    return (
        axios.get('https://jsonplaceholder.typicode.com/users')
    )
}
export const useData = () => {
   return useQuery('rq-hero',dataFetch,
   {
    //    enabled : false,
    // onSuccess,
    // onError,
    // select : (data) => {
    //     const username = data.data.map(u => u.username)
    //     return username
    // }

   })
}