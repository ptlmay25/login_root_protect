import React from "react";
import Home from "./pages/home";
import Signin from "./pages/signin"
import About from "./pages/about";
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'; 
import Profile from "./pages/profile";
import { AuthProvider } from "./auth/auth";
import ProtectedRoute from "./auth/protectedroute";


function App(){

 return (
  <AuthProvider>

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
  </Routes>
</BrowserRouter>


  </AuthProvider>
  






 );



 
}


export default App;