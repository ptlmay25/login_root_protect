import React, { useState } from "react";
import supabase from "../supabase";
import { useAuth } from "../auth/auth";
import { Navigate } from "react-router-dom";



function SignIn(){
   const auth = useAuth();

 
 

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignIn = async (event)=>{
        
        event.preventDefault();

       const signIn= await auth.login(email,password);

       if(signIn.error) {
        console.log(signIn.error.message);
    } else {
        console.log("Sucess");
        <Navigate to={"/profile"} />
    }
      

        

        

        
       
    }



 
   

    return (
<div>
<form onSubmit={handleSignIn}>

<input type="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email"></input>
<input type="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder="Password"></input>

<button type="submit" >Sign In</button>

</form>
</div>
      

    );
}
export default SignIn;