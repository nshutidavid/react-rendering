import React from "react";
import Input from "./Input";
import Button from "./Button";

const Login = () => 
<form className="form">

<Input 
type="text"
placeholder="Username"
/>  
<Input 
type="password"
placeholder="Password"
/>  
<Button
 nameOfButton="Login"
/>
<Button
 nameOfButton="Create Account"
/>
</form> 



export default Login;