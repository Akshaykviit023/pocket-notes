import React from 'react'
import getInitials from '../utils/getInitials';

const ChatNavbar = ( { currentGroup } ) => {
  return (
    <div className='w-full bg-[#E8E8E8] p-4 flex gap-6 items-center fixed top-0'>
        <div className={`h-[70px] w-[70px] bg-gray-600 rounded-full text-white flex justify-center items-center text-2xl font-medium`}>{getInitials(currentGroup)}</div>
        <h1 className='text-2xl font-medium'>{currentGroup}</h1>
        </div>
  )
}

export default ChatNavbar