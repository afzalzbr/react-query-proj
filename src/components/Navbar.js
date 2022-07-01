import React from 'react'

function Navbar({page,setPage}) {
  return (
    <nav>
        <button onClick={()=>setPage('planets')}>Planets</button>
        <button onClick={()=>setPage('people')}>People</button>
    </nav>
  )
}

export default Navbar