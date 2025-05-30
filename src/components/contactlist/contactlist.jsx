import { useState } from "react"
import Calloption from "../calloption/calloption"
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion'
const members = [
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "John lorin",
        email: "john@example.com"
    }, {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Chris bondi",
        email: "chridbondi@example.com"
    }, {
        avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "yasmine",
        email: "yasmine@example.com"
    }, {
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
        name: "Joseph",
        email: "joseph@example.com"
    },
]

const Contactlist = () =>{
    const[ismange,setmange]=useState(false);
    const[info ,setinfo]=useState();
    return (
 <motion.div
      initial={{ opacity: 0, y:10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >        
    <div className="max-w-2xl mx-auto px-4">
        <div className="mt-20">
        <div className="items-start justify-between sm:flex">
            <div>
                <h4 className="text-gray-400 text-xl font-semibold">Team members</h4>
                <p className="mt-2 text-gray-400 text-base sm:text-sm">Give your team members access to manage the system.</p>
            </div>
            <NavLink to='/Add Contact' className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                New Contact
            </NavLink>
        </div>
        <ul className="mt-12 divide-y">
            {
                members.map((item, idx) => (
                    <>
                    <li key={idx} className="py-5 flex items-start justify-between">
                        <div className="flex gap-3">
                            <img src={item.avatar} className="flex-none w-12 h-12 rounded-full" />
                            <div>
                                <span className="block text-sm text-gray-400 font-semibold">{item.name}</span>
                                <span className="block text-sm text-gray-400">{item.email}</span>
                            </div>
                        </div>
                        <button  onClick={()=>{setinfo(item);setmange(true)}} className="text-white cursor-pointer hover:text-gray-700 text-sm focus:bg-white focus:text-gray-700  rounded-lg px-3 py-2 duration-150 border-1 border-blue-700  bg-blue-500/30 hover:bg-gray-100">Manage</button>
                    </li>  
                     
                   </>
                    
                ))
            }
        </ul>
           <Calloption ismange={ismange} setmange={setmange} info={info}></Calloption>
        </div>
    </div>
    </motion.div> 
)
}
export default Contactlist;