import React  from "react";
import { Link } from "react-router-dom";


function Home(){


    return (
    

        <div>
       
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/sign-in"}>Sign-in</Link></li>
              <li><Link to={"/profile"}>Profile</Link></li>
            </ul>
            <p>This is home Page</p>
        </div>


    );
}

export default Home;