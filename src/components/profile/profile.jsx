import { motion } from "framer-motion"
import EditableInput from "./editable field/editable_field"
import { useState } from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa'; // for website
import { FaCog } from 'react-icons/fa';
import Forgotten_pass from "./forgotten_pass";
import Pass_change from "./pass_change";


const user={
  "fullName": "Mst Tamanna Akter Toma",
  "phone": "+1 123 456 7890",
  "email": "john@example.com",
  "dob": "1990-01-01",
  "institute": "Harvard University",
  "tags": ["Friend", "Business"],
  "isFavorite": true,
  "image": "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  "social": {
    "whatsapp": "https://wa.me/1234567890",
    "facebook": "https://facebook.com/john",
    "linkedin": "https://linkedin.com/in/johndoe",
    "instagram": "https://instagram.com/john",
    "website": "https://johndoe.com"
  },
  "notes": "Met at the networking event in 2022."
}


function profile() {
  const [value,setvalue]=useState(user.fullName);
  const[forgotten,setforgotten]=useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}

    >
      <div className="profile px-6 py-5 min-h-screen h-fit border-1 border-blue-700/50  bg-white/10 backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center justify-start gap-y-4 ">
             <div className="w-full pb-2  flex flex-col items-start justify-center border-b-2 border-dotted border-blue-500">
                  <h1 className="text-xl text-blue-500/50 text-shadow-md text-shadow-white">PROFILE</h1>
                  <p className="text-gray-400">View all your profile details here </p>
             </div>

            <div className="w-full h-full flex md:flex-wrap md:flex-row flex-col justify-between items-start gap-4">
                  <div className="lg:max-w-[35%] flex-1 w-full md:min-w-[350px] h-96 p-4  border-1 border-blue-500 rounded-md flex flex-col items-center justify-between ">
                       <div className=" text-center">
                          <h1 className="text-shadow-white text-2xl">{user.fullName}</h1>
                          <p className="text-blue-400">Verified</p>
                       </div>
                       <img className="rounded-full border-8 border-gray-100/40 w-68 h-68 object-fill" src={user.image} alt="" />
                  </div>
                  
                <div className="flex-1 h-96 md:min-w-[470px] p-4  border-1 border-blue-500 rounded-md flex flex-col items-start justify-start gap-y-2 ">
                      <div className="w-full z-50">
                         <h1 className="text-shadow-white text-start text-lg text-shadow-sm">Bio & other details</h1>
                      </div>
                    <div className="overflow-y-auto hide-scrollbar  mt-3   flex flex-wrap items-center justify-center gap-4 ">
                        <div className="w-full pb-3 px-4 gap-4 flex md:flex-wrap flex-col md:flex-row items-start justify-between">
                            <EditableInput type='text' value={value} label="Name" setValue={setvalue} />
                            <EditableInput type='text' value={value} label="Email" setValue={setvalue} />
                        </div>
                        <div className="w-full pb-3 px-4  gap-4 flex md:flex-wrap flex-col md:flex-row items-start justify-between">
                            <EditableInput type='text' value={value} label="Number" setValue={setvalue} />
                            <EditableInput type='text' value={value} label="Address" setValue={setvalue} />
                        </div>
                        <div className="w-full pb-3 px-4  gap-4 flex md:flex-wrap flex-col md:flex-row items-start justify-between">
                            <EditableInput type='text' value={value} label="Institute" setValue={setvalue} />
                            <EditableInput type='text' value={value} label="Date of birth" setValue={setvalue} />
                        </div>
                        <div className="w-full pb-3 px-4  gap-4 flex md:flex-wrap flex-col md:flex-row items-start justify-between">
                            <EditableInput type='text' value={value} label="Tags" setValue={setvalue} />
                            <EditableInput type='text' value={value} label="Favorite" setValue={setvalue} />
                        </div>
                        <div className="w-full pb-3 px-4 gap-4 flex md:flex-wrap flex-col md:flex-row items-start justify-between">
                            <EditableInput type='text' value={value} label="Name" setValue={setvalue} />
                            <EditableInput type='text' value={value} label="Name" setValue={setvalue} />
                        </div>
                        
                    </div>
                </div>

            </div>

            <div className="w-full h-fit text-center">
                 <button className="rounded-md w-full cursor-pointer px-2 py-2 text-xl bg-blue-950/60 text-gray-400 hover:text-gray-300 hover:bg-blue-950">Save changes</button>
            </div>

            <div className="w-full min-h-82 gap-4 flex flex-wrap md:flex-row flex-col">
                   <div className="relative overflow-y-auto h-82  flex-1 hide-scrollbar p-2  space-y-2 min-h-62 border-1 border-blue-500 rounded-md">
                        <div className="absolute top-2 right-2 text-xl">
                            <FaCog className="cursor-pointer"/>
                        </div>
                        <div className="absolute top-2 left-8 text-xl">
                             <button onClick={()=>setforgotten(!forgotten)} type="button" className={`cursor-pointer text-sm text-blue-500 hover:bg-blue-950 ${forgotten?'bg-blue-950':"bg-transparent"} p-2 rounded-md border`}>Forget password</button>
                        </div>

                    <div className="w-full pt-15 px-6 flex flex-wrap md:flex-row flex-col items-start justify-start gap-6"> 
                       {
                        forgotten?(
                             <Forgotten_pass></Forgotten_pass>
                        ) 
                          :(
                              <Pass_change></Pass_change>
                             )
                           }
                         </div> 
                   </div>
                   <div className="flex-1 overflow-y-auto h-82 p-3  hide-scrollbar gap-y-2  flex flex-wrap flex-row md:flex-col items-center justify-between  md:max-w-20 border-1 border-blue-500 rounded-md">
                          <a href="#"><FaFacebook className="hover:text-blue-500/50 cursor-pointer text-3xl text-blue-500"/></a>
                          <a href="#"><FaGithub className="hover:text-blue-500/50 cursor-pointer text-3xl text-blue-500"/></a>
                          <a href="#"><FaLinkedin className="hover:text-blue-500/50 cursor-pointer text-3xl text-blue-500"/></a>
                          <a href="#"><FaInstagram className="hover:text-blue-500/50 cursor-pointer text-3xl text-blue-500"/></a>
                          <a href="#"><FaTwitter className="hover:text-blue-500/50 cursor-pointer text-3xl text-blue-500"/></a>
                          <a href="#"><MdEmail className="hover:text-blue-500/50 cursor-pointer text-3xl text-blue-500"/></a>
                          <a href="#"><FaGlobe className="hover:text-blue-500/50 cursor-pointer text-3xl text-blue-500"/></a>
                   </div>
            </div>
      </div>

    </motion.div>
  )
}

export default profile
