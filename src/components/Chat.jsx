import React from 'react'
import { useSelector } from 'react-redux';
import ChatNavbar from './ChatNavbar';
import ChatTextBox from './ChatTextBox';
import ChatMain from './ChatMain';


const Chat = () => {
    const selectedGroup = useSelector((state) => state.group.selectedGroup);
  return (
    <div>
        {selectedGroup && (
        <div>
            <ChatNavbar currentGroup={selectedGroup} />
            <ChatMain currentGroup={selectedGroup} />
            <ChatTextBox currentGroup={selectedGroup}/>
        </div>
      ) }
    </div>
  )
}

export default Chat