import React from "react";
import Form from "./Form";


function App() {
    var isDone = false;

    const strikethrough = {textDecoration: "line-through"};
    
    return <p style={isDone === true ? strikethrough : null}>Buy Milk</p>

}


// var userIsRegistered = false;
// function App() {
//   return (
//     <div className="container">
//       <Form 
//       isRegistered = {userIsRegistered}
//       />
//     </div>
//   );
// }

export default App;