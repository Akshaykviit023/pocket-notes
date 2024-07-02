import './App.css'
import ChatSection from './components/ChatSection'
import CreateModal from './components/CreateModal';
import Sidebar from './components/Sidebar'
import { useState } from 'react';

function App() {
  const [dataFromChild, setDataFromChild] = useState(false);
  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  return (
    <>
    <div className='relative'>
    {dataFromChild && (
        <div className='w-full h-screen bg-[rgba(0,0,0,0.5)] absolute z-10' onClick={() => setDataFromChild(false)}/>
      )}
      
      <div className={`flex ${dataFromChild ? " " : ""}`}>
        <Sidebar sendDataToParent={handleDataFromChild}/>
        <ChatSection />
        
      </div>

      {dataFromChild && (
        <CreateModal sendDataToParent={handleDataFromChild}/>
      )}
      </div>
    </>
  )
}

export default App

/*

{
  "cuvette notes": {
    "messages": [
      {
        "message": "sdasda",
        "time": "10:30 AM",
        "date": "9 March 2023"
      },
      {
      }
    ]
  },
  "": {
  }
}

*/