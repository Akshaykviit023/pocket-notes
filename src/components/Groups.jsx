import React from 'react'
import { useDispatch } from 'react-redux';
import { selectGroup } from '../redux/groupSlice';
import { useSelector } from 'react-redux';
import getInitials from '../utils/getInitials';

const Groups = () => {
    const existingData = JSON.parse(localStorage.getItem('notesData')) || null;
    const dispatch = useDispatch();
    const selectedGroup = useSelector((state) => state.group.selectedGroup);

    const handleGroupClick = (key) => {
        dispatch(selectGroup(key));
    };

    
  return (
    <div className=' h-[80%] overflow-y-scroll my-8'>
        <div className=' '>
        {existingData && Object.entries(existingData).map(([key, values]) => (
            <div key={key} className={`flex gap-4 items-center py-3 px-3 rounded-3xl cursor-pointer ${key == selectedGroup ? "bg-[#F7ECDC]" : "hover:bg-slate-100"} `} onClick={() => handleGroupClick(key)}>
                <div className={`h-[70px] w-[70px] ${values.color} rounded-full text-white flex justify-center items-center text-2xl font-medium`}>{getInitials(key)}</div>
                <h1 className='text-xl font-medium'>{key}</h1>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Groups