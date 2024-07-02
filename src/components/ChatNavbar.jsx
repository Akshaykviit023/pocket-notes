import React from 'react'
import getInitials from '../utils/getInitials';
import { MoveLeft } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { selectGroup } from '../redux/groupSlice';

const ChatNavbar = ( { currentGroup } ) => {
    const dispatch = useDispatch();

    const handleGroupClick = () => {
        dispatch(selectGroup(null));
    };
  return (
    <div className='w-full bg-[#E8E8E8] p-4 flex gap-6 items-center fixed top-0 '>
        {currentGroup && (
            <MoveLeft className={`hidden max-md:block`} onClick={() => handleGroupClick()} />
        )}
        <div className={`h-[70px] w-[70px] bg-gray-600 rounded-full text-white flex justify-center items-center text-2xl font-medium max-sm:h-[50px] max-sm:w-[50px] max-sm:text-base`}>{getInitials(currentGroup)}</div>
        <h1 className='text-2xl font-medium max-sm:text-base'>{currentGroup}</h1>
        </div>
  )
}

export default ChatNavbar