import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ChatMain = () => {

    const existingData = JSON.parse(localStorage.getItem('notesData')) || {};
    const [messages, setMessages] = useState([]);

    const selectedGroup = useSelector((state) => state.group.selectedGroup);

  useEffect(() => {
    const groupMessages = existingData[selectedGroup]?.messages || [];
    setMessages(groupMessages);
  }, [selectedGroup]);

  return (
    <div className='mt-28 h-[475px] px-12 py-8  overflow-y-scroll flex flex-col gap-12'>
        {messages.map((item, index) => (
            <div key={index} className='flex gap-12 text-lg '>
                <div className='font-medium'>
                     <p>{item.time}</p>
                    <p>{item.date}</p>
                </div>
                <p className='w-4/5'>{item.message}</p>
            </div>
        ))}
    </div>
  )
}

export default ChatMain