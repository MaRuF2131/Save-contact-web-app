
import './App.css'
import Mainlayout from './components/mainlayout/mainlayout';


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
          <Mainlayout></Mainlayout>
    </div>
  )
}

export default App
