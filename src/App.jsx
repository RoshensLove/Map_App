// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Form from './components/Form'
// import List from './components/List'

// function App() {
//   const [message, setMessage] = useState('')

//   const hendleChildData = (data) => {
//      setMessage(data);
//   }

//   return (
//     <>
//       <div>
//        <h1>HEllo{message}</h1>
//        <Form onSendData = {hendleChildData}/>
//        {/* <List/>  */}
//       </div>
//     </>
//   )
// }

// export default App


import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Card from './components/Card'

const defaultLocationStorage = {
  location: '',
  date: '',
  time: '',

}

function App() {
  const [locationStorage, setLocationStrorage] = useState([ ]); 

  // { name: "111", email: "g@gmail.com"  }
  const handleFormSubmit = (data) => {
    setLocationStrorage((prevData) => [...prevData, data]); 
  };

  return (
    <div>
      <h1>1111</h1>
      <Form onSendData={handleFormSubmit} /> 
      <List data={locationStorage} /> 
      <Card data={locationStorage}/>
    </div>
  );
}

export default App;

