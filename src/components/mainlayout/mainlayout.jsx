import React from 'react'
import Navbar from '../navbar/navbar'
import Sidebar from '../sidebar/sidebar'
import Createcontact from '../create-contact-form/createContact'
import Contactlist from '../contactlist/contactlist'

function mainlayout() {
  return (
    <div className=''>
        <Navbar></Navbar>
          <div className='pt-20 pl-25 pr-5'>
           {/*  <Createcontact></Createcontact>  */}
               <Contactlist></Contactlist>
           </div>
        <Sidebar></Sidebar>
    </div>
  )
}

export default mainlayout