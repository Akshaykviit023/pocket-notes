import React from 'react'
import chatDeafult from '../assets/chatDefault.png'
import { LockKeyhole } from 'lucide-react'
import { useSelector } from 'react-redux';
import Chat from './Chat';


const ChatSection = () => {
    const selectedGroup = useSelector((state) => state.group.selectedGroup);
  return (
    
    <div className={`w-full bg-[#F7ECDC] h-screen max-md:${selectedGroup ? "w-full" : "hidden"}`}>
        {selectedGroup ? (
            <Chat />
        ) : (
            <div className='h-screen flex flex-col justify-center items-center'>
            <img src={chatDeafult} alt="noImg" height="313px" width="626px" />
            <h1 className='text-[50px]'>Pocket Notes</h1>
            <p className='text-[22px] mt-4'>Send and receive messages without keeping your phone online.</p>
            <p className='text-[22px]'>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            
            <p className='text-[22px] flex items-center gap-2 absolute bottom-4'><LockKeyhole />end-to-end encrypted</p>
        </div>
        )}
        
    
</div>

  )
}

export default ChatSection