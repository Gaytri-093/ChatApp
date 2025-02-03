import React, {useState}from 'react'
import { IoSend } from "react-icons/io5";
import UseSendMessage from '../../../context/UseSendMessage';

const TypeSend = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessages}= UseSendMessage();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };
  return (
   <form onSubmit={handleSubmit}>
    <div className='flex  space-x-2 h-[10vh] bg-gray-800 hover:bg-gray-600'>
     <div className='w-[70%] mx-4'>
      <input
       type="text"
       value={message}
       onChange={(e)=>setMessage(e.target.value)}
       placeholder="Type here"
       className="border-gray-700 rounded outline-none px-4 py-3 mt-[5px] mx-1 mb-1 bg-gray-950 w-full" />
    </div>
    <button>
        <IoSend className='text-3xl'/>
    </button>
   </div>
   </form>

  )
}

export default TypeSend
