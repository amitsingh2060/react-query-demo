import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Link } from 'react-router-dom'
function SuperHero() {
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
           setdata(res.data)
           setisloading(false)
        })
    }, [])
    
    if(isloading){
        return <h1>loading.......</h1>
    }
    return (
        <div>
            <h1>super</h1>
            {data.map(e => {
                return(
                    <div key={e.id}>
                    <Link>{e.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default SuperHero
