import { Plus } from 'lucide-react'
import React from 'react'
import Groups from './Groups';
import { useSelector } from 'react-redux';

const Sidebar = ({ sendDataToParent }) => {
    const selectedGroup = useSelector((state) => state.group.selectedGroup);

    function handleClick() {
        sendDataToParent(true);
      }
  return (
    <div className={`w-[450px] h-screen p-4 max-md:${selectedGroup ? "hidden" : "w-full"}`}>
        <h1 className='text-3xl font-medium'>Pocket Notes</h1>
        <div className='flex justify-center'>
            <button className='bg-black text-white flex gap-2 items-center text-2xl font-medium py-1 px-5 rounded-full mt-10 cursor-pointer' 
            onClick={handleClick}>
                <Plus />
                Create Notes group
            </button>
        </div>
        <Groups />
    </div>
  )
}

export default Sidebar