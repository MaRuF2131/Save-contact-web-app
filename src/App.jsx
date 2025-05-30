
import './App.css'
import Root from "./root/root"
import { AnimatePresence } from 'framer-motion';


function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
   /*  event.target.reset(); */ // Reset the form after submission
    console.log(data);
    fetch('http://localhost:5000/setuser', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  return (
    <div className='bg-gradient-to-br min-h-screen  from-black via-blue-950 to-black text-white'>
          <Root></Root>
    </div>
  )
}

export default App
