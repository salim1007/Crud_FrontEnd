import React from 'react'
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';

const Home = () => {
    const navigate= useNavigate();
  return (
    <div>
       <p>Employee Details</p>

        <Employee/>
       {/* <button onClick={()=>navigate('/contacts')}>View Entries</button> */}
    </div>
  )
}

export default Home;