import { useEffect, useRef, useState } from 'react';
import { FaPen } from 'react-icons/fa';

function EditableInput({type, label, value, setValue }) {
  const [isEditable, setIsEditable] = useState(false);
  const inputRef=useRef(null);

  const toggleEdit = () => {
    setIsEditable(true);
    if(isEditable){setIsEditable(false); return}
    setTimeout(() => {
      document.getElementById(label).focus();
    }, 0);
  };

    useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.closest('.editable-container')?.contains(e.target)) {
          setIsEditable(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []); 

  return (
    <div className="relative flex-1 md:w-auto w-full editable-container" ref={inputRef}>
      <label className="block text-md mb-1 font-semibold text-gray-400 ">{label}</label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        readOnly={!isEditable}
        className={`w-full p-3 pr-10 opacity-50 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none ${
          isEditable ? 'focus:ring-2 focus:ring-blue-500' : ''
        }`}
      />
      <FaPen
        onClick={toggleEdit}
        className={`absolute top-10 right-3  cursor-pointer ${isEditable?'text-blue-500':'text-white/60'}`}
      />
    </div>
  );
}
export default EditableInput;