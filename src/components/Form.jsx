// import React, { useState } from 'react';

// const Form = () => {
//   const [name, setName] = useState(''); // Храним имя
//   const [email, setEmail] = useState(''); // Храним email

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Останавливаем перезагрузку страницы
//     console.log('Имя:', name); // Выводим имя в консоль
//     console.log('Email:', email); // Выводим email в консоль
//   };
  

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Имя:</label>
//         <input
//           type="text"
//           value={name} // Связываем с состоянием
//           onChange={(e) => setName(e.target.value)} // Обновляем состояние
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email} // Связываем с состоянием
//           onChange={(e) => setEmail(e.target.value)} // Обновляем состояние
//         />
//       </div>
//       <button type="submit">Отправить</button>
//     </form>
//   );
// };

// export default Form;


import React, { useState } from 'react';

const Form = ({ onSendData }, {Children}) => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const data = { name, email }; 
    onSendData(data); 
    setName(''); 
    setEmail(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      {Children}
      <div>
        <label>Имя:</label>
        <input
          type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
  
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
// {name.button = "Отправить"}