import React from "react";
import Form from "./Form";

function strike() {
    document.getElementById("root").style.textDecoration = "line-through";
}
 
function unstrike() {
    document.getElementById("root").style.textDecoration = null
}


function App() {
     return (
<div>
<p>Buy Milk</p>
<button onClick={strike}> Change to strike through</button> <br />
<button onClick={unstrike} > Change Back </button>

</div>


     ) 
 

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