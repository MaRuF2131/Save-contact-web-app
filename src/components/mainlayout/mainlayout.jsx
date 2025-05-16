import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import Sidebar from '../sidebar/sidebar'
import Loader from '../../mytools/loader/loader'
import { Outlet, useLocation } from 'react-router-dom'

function mainlayout() {
    const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trigger loader on route change or re-render
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // adjust delay as needed

    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <div className=''>
        <Navbar></Navbar>
          <div className='pt-20 pl-25 pr-5'>
               {loading && <Loader/> }
               <Outlet></Outlet>
           </div>
        <Sidebar></Sidebar>
    </div>
  )
}

export default mainlayout