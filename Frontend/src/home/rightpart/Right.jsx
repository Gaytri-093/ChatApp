import React, { useEffect } from 'react'
import Chatuser from './components/Chatuser'
import Messages from './components/Messages'
import TypeSend from './components/TypeSend'
import UseConversation from '../../components/zustand/UseConversation.jsx'
import {useAuth} from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

const Right = () => {
  const {selectedConversation, setSelectedConversation} = UseConversation();

  useEffect(()=>{
    return setSelectedConversation(null)


  },[setSelectedConversation])
  return (
    <div className='w-full bg-slate-900 text-gray-300'> 
   <div>
    {!selectedConversation ? (<NoChatSelected/>):(
      <>
      <Chatuser/>
     <div className="flex-1 overflow-y-auto "style={{maxHeight:"calc(90vh - 10vh)"}}>
      <Messages/>
     </div>
      <TypeSend/>
      </>
    
    )}
   </div>
   </div>
  )
}

export default Right


const NoChatSelected= ()=>{
  const [authUser] = useAuth();
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  )
}