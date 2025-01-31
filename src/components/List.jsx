// import React, { Component } from 'react'

// export class List extends Component {
//   render() {
//     return (
//       <div>
//         <h3>bBBBBBB</h3>
//       </div>
//     )
//   }
// }

// export default List


import React from 'react';
import MyCard from './Card';

const List = ({ data }) => {
    // 1. Перевірити чи є дані
  // 2. Якщо є відмалювати Card
  // 3. Якщо немає Notification
  // {data ? <Card/> : "no data" } // JS
  // <div></div> html


return (
  <div>
    {data.length <=0 ? <p>Notification: "No data"</p> : <MyCard/>}
  </div>
)

  // if (data.length <= 0){
  //   return(
      
  //     <div>
        // <p>Notification: "No data"</p>
  //     </div>
  //   )
  // } else {
  //     return(
  //       <div>
  //       <h3>Список </h3>
  //       <ul>
  //         {data && data.map((item, index) => (
  //           <li key={index}>
  //             Имя: {item.name}, Email: {item.email}
  //           </li>
  //         ))}
  //       </ul>
  //   </div>
  //     )
  //   }
    
  }



export default List;
