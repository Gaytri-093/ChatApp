import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import UseGetAllUsers from '../../../context/useGetAllUsers.jsx';
import UseConversation from '../../../components/zustand/UseConversation.jsx';
import toast from 'react-hot-toast';

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = UseGetAllUsers();
  const { setSelectedConversation } = UseConversation();
  console.log(allUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      // toast.error("User not found");
      toast.error("User Not found")
    }
  };
  return (
  <div className='h-[10vh]'>
     <div className='px-6 py-4'>
      <form onSubmit={handleSubmit}>
      <div className="flex space-x-3">
  <label className="border-[1px] rounded-lg p-1 flex items-center gap-2 border-slate-700 bg-slate-900 text-gray-200 w-[80%]">
    <input 
      type="text" 
      className="grow outline-none bg-transparent placeholder-gray-600 text-gray-200 focus:outline-none " 
      placeholder="Search" 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    />
  </label>
  <button>
    <FaSearch className="text-4xl p-1 hover:bg-gray-600 rounded-full duration-300" />
  </button>
</div>


      </form>
    </div>
   </div>
  )
}

export default Search
