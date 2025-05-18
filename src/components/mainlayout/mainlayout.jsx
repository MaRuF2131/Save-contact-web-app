import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import Sidebar from '../sidebar/sidebar'
import Loader from '../../mytools/loader/loader'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Profile from '../profile/profile'

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    > 
    <div className=''>
        <Navbar></Navbar>
          <div className='pt-20 pl-25 pr-5 pb-5'>
               {loading && <Loader/> }
               {!loading && <Outlet></Outlet>}
           </div>
        <Sidebar></Sidebar>
    </div>
    </motion.div>
  )
}

export default mainlayout