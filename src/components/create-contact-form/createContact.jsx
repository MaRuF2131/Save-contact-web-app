
import { useState } from "react";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';

function CreateContact() {

  const [notes, setNotes] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [tags, setTags] = useState('');
  const[profileStatus,setprofileStatus]=useState('Set Profile Image')
  const [image, setImage] = useState('https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file){
      setImage(URL.createObjectURL(file))
      setprofileStatus('Change Profile Image');
    }
    else{
        setprofileStatus('Invalid Profile Image');
        setImage('https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ');
    }
  };

  return (
    <div className="create-contact h-full  text-white flex flex-col items-center justify-center">
          <form className=" bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-2xl space-y-6 text-white border border-white/20">
                <h2 className="text-3xl font-bold text-center">📇 Add New Contact</h2>

                {/* Profile Image Upload */}
                <div className="flex items-center justify-between space-x-4">
                  <input type="file" id='set-profile' accept="image/*" onChange={handleImageUpload} className="text-sm hidden" />
                  <label htmlFor="set-profile" className="block text-sm mb-1 cursor-pointer bg-blue-950 hover:bg-blue-800 hover:border-blue-950 focus:outline-none  border-1 border-blue-800 text-white font-semibold py-2 px-4 rounded-lg">📁 {profileStatus}</label>
                  {image && (
                    <img
                      src={image}
                      alt="Profile"
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                    />
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 123 456 7890"
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm mb-1">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                 {/* institute */}
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-1">Institute</label>
                    <input
                      type="text"
                      placeholder="School/College/Univercity"
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Tags */}
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-1">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="Friend, VIP, Business"
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Favorite Toggle */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={isFavorite}
                      onChange={() => setIsFavorite(!isFavorite)}
                      className="h-5 w-5 accent-blue-600"
                      id="favorite"
                    />
                    <label htmlFor="favorite" className="text-sm">Mark as Favorite</label>
                  </div>
                </div>

                 {/* Social Media Links */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-1"><FaWhatsapp /> WhatsApp</label>
                      <input type="url" placeholder="https://wa.me/..."  className="w-full p-3 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-1"><FaFacebook /> Facebook</label>
                      <input type="url" placeholder="https://facebook.com/..."  className="w-full p-3 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-1"><FaLinkedin /> LinkedIn</label>
                      <input type="url" placeholder="https://linkedin.com/in/..."  className="w-full p-3 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-1"><FaInstagram /> Instagram</label>
                      <input type="url" placeholder="https://instagram.com/..."  className="w-full p-3 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2 text-sm mb-1"><FaGlobe /> Website</label>
                      <input type="url" placeholder="https://your-website.com"  className="w-full p-3 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm mb-1">Notes</label>
                  <textarea
                    rows="3"
                    maxLength="200"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Extra info like how you met, etc."
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="text-xs text-right text-white/60 mt-1">{notes.length}/200</div>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-xl font-medium"
                >
                  💾 Save Contact
                </button>
          </form>
    </div>
  )
}

export default CreateContact