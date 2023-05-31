import React, { useState, useEffect } from 'react'
import Axios from "axios"
import './api.css'



const Api = () => {


const [apiData, setApiData] = useState(null)
const [count,setCount] = useState("")


const fetchData =()=>{
    Axios.get('https://api.publicapis.org/entries')
    .then((res)=>{setApiData(res?.data?.entries) 
        setCount(res?.data?.count)})
}


console.log(apiData)
useEffect(() => {
  fetchData()
}, [])

const check =(key)=>{
    const object={
        unknown:"red",
        no:"grey",
        yes:"green",
        true:"#10b981",
        false:"#ef4444"
    }
    return object[key]
}
  return (
<>
<h3 style={{display:"flex", justifyContent:"center"}} >{count} Results Found </h3>
      <div className='outer-div'>        
    {apiData?.map((items)=>
        {
            return         <div className='card-outer' >
            <h2>{items.API}</h2>
            <p className='card-desc' >{items.Description}</p>
            <div>
                <div className='card-detail' ><p>{items.Auth ?"API key authorization":"No Authorization"}</p> <p style={{height:"40px",width:"50px",backgroundColor: items.Auth ?'#10b981':'#3b82f6'}} ></p></div>
                <div className='card-detail' ><p>{items.HTTPS ?"HTTPS available":"HTTPS unavailable"}</p> <p  style={{height:"40px",width:"50px",backgroundColor:  check(items.HTTPS)}}  ></p></div>
                <div className='card-detail' ><p>{items.Cors ?"CORS available":"CORS unavailable"}</p> <p style={{height:"40px",width:"50px",backgroundColor: check(items.Cors)}} ></p></div>
            </div>
        </div>
        }
        )}
        </div>

        </>
  )
}

export default Api
