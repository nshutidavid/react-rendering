import React from "react";
import Input from "./Input";
import Button from "./Button";

const Register = () =>
<form className="form">

<Input 
type="text"
placeholder="Username"
/>  
<Input 
type="password"
placeholder="Password"
/>  
<Input 
type="password"
placeholder="Confirm Password"
/> 
<Button
 nameOfButton="Register"
/>


</form>

export default Register;