import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Borrowing() {

  const userType = 'admin';

  if(userType === "admin" || userType === "labtech"){
    return (
      <div>
        
        <Link to="dashboard">Dashboard  </Link>
        <Link to="flagged">Flagged  </Link>
        <Link to="return">Return  </Link>
        <Link to="search">Search  </Link>
        <Link to="request">Request  </Link>
        <Outlet />
      </div>
    )
  }else{
    return (
      <div>
        
        <Link to="search">Search  </Link>
        <Link to="request">Request  </Link>
        <Outlet />
      </div>
    )
  }
}

export default Borrowing