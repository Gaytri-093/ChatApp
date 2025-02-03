import React, { useState } from 'react';
import { CiLogout } from "react-icons/ci";
import axios from "axios";
import Cookies from "js-cookie";
import toast from 'react-hot-toast';
// /logOut
const Logout = () => {
  const [loading, setLoading] = useState(false);
  const handleLogout = async ()=>{
    setLoading(true);
    
    try{
      const res = await axios.post("/api/user/logOut");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged Out successfully");
      window.location.reload();
     
    }
    catch(error){
      console.log("error in Logout: " + error);
      toast.error("error in Logout: " + error);
    }
    

  }
  return (
  <div className='h-[9vh] '>

<CiLogout className='text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1' onClick={handleLogout}/>

   </div>
  )
}

export default Logout
