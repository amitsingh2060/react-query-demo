import axios from 'axios'
import React,{useEffect,useState} from 'react'

import { useData } from '../hooks/useSuperData'
// const dataFetch =  () => {
//     return (
//         axios.get('https://jsonplaceholder.typicode.com/users')
//     )
// }
function RQHero() {
    // const onSuccess = (data) => {
    //     console.log('after success', data);
    // }
    // const onError = (error) => {
    //     console.log('error fetchinf ', error);
    // }
   const {isLoading, data, isError, isFetching ,error, refetch} =  useData()
    
    if(isLoading){
        return <h1>loading.......</h1>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }
    console.log(data);
    return (
        <div>
         
            <h1>RQHero</h1>
            <div>
                { data?.data.map((e) => {
                    return(
                        <>
                        <p>{e.name}</p>
                        </>
                    )
                })  }
            </div>
           <button onClick={refetch}>Refatch</button>
        </div>
    )
}

export default RQHero
