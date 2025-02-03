import React from 'react'
import Search from './components/Search'
import Users from './components/Users'
import Logout from './components/Logout'

const Left = () => {
  return (
    // w-[30%]
    <div className='w-full bg-black text-gray-300'>
      <Search/>
      <div className="flex-1 overflow-y-auto "style={{minHeight:"calc(90vh - 10vh)"}}>
      <Users/>
     </div>
      <Logout/>
    </div>
  )
}

export default Left
