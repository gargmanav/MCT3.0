import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "./userdetail.css"

const Details = ({detaildata}) => {
  
  const [reposData, setReposData] = useState([]);
  console.log(detaildata);

  const fetchRepos = async () => {
    const res = await fetch(detaildata.repos_url);
    const data = await res.json();
    setReposData(data);
  };
  
  useEffect(() => {
    fetchRepos();
  }, [detaildata]);

  return (
    <>
      <Navbar />
      <div className='maincontentuserdetail'>
        <h1 style={{textAlign:"center",color:"black"}}>User Details</h1>
        <div className='carduserdetail'>
          <div className='leftuserdetail'>
            <img src={detaildata.avatar_url}></img>
          </div>
          <div className='rightuserdetail'>
            <h2>{detaildata.login}</h2>
            <div className='userpostsdetail'>
              <p>Repo:   {reposData.length}</p>
              <p>Following:  {detaildata.followers_url.length}</p>
              <p>Followers:  {detaildata.following_url.length}</p>
            </div>
            <h3>{detaildata.location}</h3>
            <p style={{color:"white"}}>{detaildata.html_url}</p>
            <Link to={detaildata.html_url}>
              <button>View Profile</button>
            </Link>
          </div>
        </div>
        <h1 style={{textAlign:"center",color:"black"}}>Repositories({reposData.length})</h1>
        <div className='userdowncarddetail'>
          <div className='innercarduserdetail'>
              <ul>
                {reposData.map((repou) => {
                    return <div className='usercardbottomdetail'>
                        <div className='leftcardbottmdetail'>
                            <h3>{repou.name}</h3>
                  
                        </div>
                        <div className='rightcardbottomdetail'>
                         <Link><button>View Repo</button></Link>
                         <Link><button>Live Demo</button></Link>
                        </div>
                    </div>
                    })}
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;