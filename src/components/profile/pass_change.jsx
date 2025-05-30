import { motion } from "framer-motion";
export default ()=>{
    return(
                       <>
                            <motion.div
                                 initial={{ opacity: 0, y: 200 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -30 }}
                                  transition={{ duration: 0.8 }}
                                  className="flex-1 w-full md:w-auto space-y-4">
                                  <div>
                                      <label htmlFor="oldpass" className="block text-md mb-2 font-semibold text-gray-400 text-lg">Old password</label>
                                      <input className="text-gray-300 w-full  p-3 pr-10 opacity-50 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" name="oldpassword" id="oldpass" placeholder="Old password" />
                                  </div>
                                  <div>
                                      <label htmlFor="newpass" className="block text-md mb-2 font-semibold text-gray-400 text-lg">New password</label>
                                      <input className="text-gray-300 w-full  p-3 pr-10 opacity-50 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" name="newpassword" id="newpass" placeholder="New password" />
                                  </div>

                                       <div className="w-full h-fit text-center">
                                            <button className="rounded-md w-full cursor-pointer px-2 py-2 text-xl bg-blue-950/60 text-gray-400 hover:text-gray-300 hover:bg-blue-950">Save changes</button>
                                       </div>
                             </motion.div> 

                              <motion.div
                                 initial={{ opacity: 0, y: 200 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -30 }}
                                  transition={{ duration: 0.8 }}
                                  
                                  className="flex-1 w-full md:w-auto space-y-4">
                                 <div>
                                     <label htmlFor="newmail" className="block text-md mb-2 font-semibold text-gray-400 text-lg">New mail</label>
                                      <input className="text-gray-300 w-full  p-3 pr-10 opacity-50 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" type="mail" name="newmail" id="newmail" placeholder="new mail" />
                                  </div>
                                  <div>
                                      <label htmlFor="userid" className="block text-md mb-2 font-semibold text-gray-400 text-lg">UserID</label>
                                      <input className="text-gray-300 w-full  p-3 pr-10 opacity-50 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" type="mail" name="userid" id="userid" placeholder="UserID" />
                                  </div>
                                      <div className="w-full h-fit text-center">
                                           <button className="rounded-md w-full cursor-pointer px-2 py-2 text-xl bg-blue-950/60 text-gray-400 hover:text-gray-300 hover:bg-blue-950">Save changes</button>
                                      </div>
                              </motion.div>
                              </>
    )
}