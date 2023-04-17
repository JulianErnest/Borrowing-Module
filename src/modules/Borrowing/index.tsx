import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Borrowing() {
  return (
    <div>Borrowing
      <a href="search">
        <button>Search (for user side)</button>
      </a>
    </div>
    
  )
}

export default Borrowing