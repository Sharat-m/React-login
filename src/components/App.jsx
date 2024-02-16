import React from "react";
import Signin from "./Signin";
var loggedIn = true;

// function renderConditionaly() {
//   if (loggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return (
//       <div>
//         <Signin />
//       </div>
//     );
//   }
// }

function App() {
  return <div className="container">{
  loggedIn === true ? <h1>Hello</h1> : <div> <Signin /> </div>}
  
  </div>;
}

export default App;
