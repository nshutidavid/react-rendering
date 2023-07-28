import React from "react";
import Login from "./Login";
import Register from "./Register";

var isRegisterd = true;



const App = ()  =>
    <div className="container">
     {
     isRegisterd === true ? <Login /> : <Register />
     }
    </div>
  

export default App;
