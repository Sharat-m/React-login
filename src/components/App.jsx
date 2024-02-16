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

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return <div className="container">{
    //Ternary operator
//   loggedIn === true ? <h1>Hello</h1> : <div> <Signin /> </div>
  currentTime > 12 ? <h1>Why are you working still?</h1>: null
}
  </div>;
}

export default App;
