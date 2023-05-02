import Login from './Components/Login';
import { Routes,Route, Navigate } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Userdetail from './Components/Userdetail';
import { useState } from 'react';
import Search from './Components/Search';
import Details from './Components/Details';
import "./App.css"

function App() {
  
  const [logintype, setlogintype] = useState(false)
  const[homedata,sethomedata] = useState({})
  console.log(homedata);
  const [detaildata,setdetaildata] = useState(homedata)
  
  
  return (
    <>
    <Routes>
    <Route path='/' element={logintype?<Navigate to="/home"/>:<Login setlogintype={setlogintype}/>}/>
        <Route path='/home' element={logintype?<Homepage setdetaildata={setdetaildata} sethomedata={sethomedata}/>:<Navigate to="/"/>}/>
        <Route path='/userdetail' element={logintype?<Userdetail/>:<Navigate to="/"/>}/>
        <Route path='/search' element={logintype?<Search setdetaildata={setdetaildata}/>:<Navigate to="/"/>}/>
        <Route path='/details' element={logintype?<Details detaildata={detaildata} />:<Navigate to="/"/>}/>
    </Routes>
    </>
   
  );
}

export default App;
