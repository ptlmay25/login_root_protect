import React from "react";
import { useState,useEffect,createContext,useContext } from "react";
import supabase from "../supabase";

const authContext = createContext();

export const AuthProvider = ({children}) =>{
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth =()=>{
    return useContext(authContext)
}

function useProvideAuth(){
    const [user,setUser]=useState("");

    const login = async (email,password)=>{
        const {error,user}=await supabase.auth.signInWithPassword({email,password})
        if(error) {
           console.log(error)
        } 

        return {error, user}

        

    }



    const logout=async ()=>{

        const {error} = await supabase.auth.signOut()

        if(error) {
            console.log(error)
        }

        setUser(null)


    }

    
       
     
useEffect(()=>{


    async function session(){
        const {
            data: { session },
          } = await supabase.auth.getSession()
          const { user } = session || {}
          console.log(user);
    
          setUser(user ?? null);

    }

    session();
   
   
       
          const {data:auth}= supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                setUser(session.user)
                
                
            }
    
            if (event === 'SIGNED_OUT') {
                setUser(null)
            }
        })
    
    
      return ()=> auth.subscription.unsubscribe();
      
    }
    
   
,[])

return{
    login,
    user,
    logout
}

}