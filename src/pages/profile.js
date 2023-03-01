import React from "react";
import { useAuth } from "../auth/auth";


function Profile(){

    const auth=useAuth()

    function handleSignOut(){

    }


    return (
        <div>
        <h1>This is Profile Page</h1>
        <button onClick={auth.logout}>LogOut</button>
        </div>
    );
}


export default Profile;