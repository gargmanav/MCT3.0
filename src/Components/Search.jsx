import React, { useState } from 'react'
import Navbar from './Navbar'
import "./search.css"
import { Link } from 'react-router-dom'
const Search = ({setdetaildata}) => {
  const [searchdata, setsearchdata] = useState("")
  const datacome = async()=>{
  const res = await fetch(`https://api.github.com/users/${searchdata}`)
  const data = await res.json()
  setdetaildata(data)
  }
  return (
    <>
    <Navbar/>
    <div className='maincontentsearch'>
      <div className='mainheadsearch'>
        <h1>GitHub - Profile Finder<br/>For GitHub</h1>
        <h3>Check Out the Followers and More,<br/>Just By entering a username!</h3>
      </div>
      <div className='inputbox'>
        <input type='text' placeholder='Enter a username' onChange={(e)=>setsearchdata(e.target.value)}></input>
        <button onClick={datacome}><Link to="/details">Search</Link></button>
      </div>
    </div>
    </>
    
  )
}

export default Search