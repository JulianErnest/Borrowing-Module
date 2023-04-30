import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { colors } from '../../constants/colors';


function Borrowing() {

  const userType = 'admin';
  const location = useLocation();

  console.log(location)

  const isActive = (path: string) => {
    const currpath = "/borrowing/" + path;
    console.log(currpath, location.pathname);
    return location.pathname === "/borrowing/" + path
  }

  if (userType === "admin" || userType === "labtech"){
    return (
      <>
       <div style={{width: '100%', backgroundColor: '#f2f2f2', paddingLeft: 50, height: 70, display: 'flex', alignItems: 'center', borderBottomColor: colors.brand, borderBottomWidth: 1, borderBottomStyle: 'solid'}}>
        <Link to="dashboard"><h4 style={{color: isActive('dashboard') ? colors.brand : colors.text}}>Dashboard</h4></Link>
        <Link to="pending-requests"><h4 style={{color: isActive('pending-requests') ? colors.brand : colors.text, paddingLeft: 50}}>Pending Requests </h4></Link>
      </div>
        <Outlet />
      </>
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