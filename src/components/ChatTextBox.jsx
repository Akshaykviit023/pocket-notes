import React, { useState } from 'react'
import { SendHorizontal } from 'lucide-react'

const ChatTextBox = ( { currentGroup } ) => {
    const [message, setMessage] = useState('');

  const handleSendClick = () => {
    if (!message.trim()) return;

    const existingData = JSON.parse(localStorage.getItem('notesData')) || {};
    const groupData = existingData[currentGroup] || { messages: [], color: '' };

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);
    const day = parts.find(part => part.type === 'day').value;
    const month = parts.find(part => part.type === 'month').value;
    const year = parts.find(part => part.type === 'year').value;
    return `${day} ${month} ${year}`;
      };

    const newMessage = {
      message: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: formatDate(new Date())
    };

    groupData.messages.push(newMessage);
    existingData[currentGroup] = groupData;
    localStorage.setItem('notesData', JSON.stringify(existingData));

    setMessage(''); 
  };
  return (
    <div className='fixed bottom-0 w-full bg-[#E8E8E8] p-4'>
        <textarea 
        className='w-[74%] h-[200px] text-3xl outline-none py-5 pl-8 pr-12 resize-none' 
        placeholder='Enter your text here...' 
        value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>
        <div className='fixed bottom-10 right-10 text-[#ABABAB]' onClick={handleSendClick}><SendHorizontal size={35} /></div>
    </div>
  )
}

export default ChatTextBox