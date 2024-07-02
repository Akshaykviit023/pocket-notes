import React, { useState } from 'react'

const CreateModal = ({ sendDataToParent }) => {
    const colorScheme = ["bg-[#B38BFA]", "bg-[#FF79F2]", "bg-[#43E6FC]", "bg-[#F19576]", "bg-[#0047FF]", "bg-[#6691FF]"];
    const [groupName, setGroupName] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    console.log(groupName,selectedColor)

    const submitModal = (e) => {
        e.preventDefault();

        const existingData = JSON.parse(localStorage.getItem('notesData')) || {};

        existingData[groupName] = {
            messages: [],
            color: selectedColor
        };

        localStorage.setItem('notesData', JSON.stringify(existingData));

        sendDataToParent(false);
    }

    const isFormValid = groupName && selectedColor;

  return (
        <div className='absolute rounded-md -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 py-8 px-12 z-20 bg-white max-md:px-6 max-md:py-6 max-md:w-[80%]'>
            <h1 className='text-3xl font-medium max-md:text-lg'>Create New Notes group</h1>
            <form onSubmit={(e) => submitModal(e)}>
                <div className='flex gap-10 items-center mt-8 max-md:gap-4'>
                    <h2 className='text-[28px] font-medium max-md:text-sm'>Group Name</h2>
                    <input type='text' placeholder='Enter your group name...' onChange={(e) => setGroupName(e.target.value)} className='w-[435px] border-2 border-solid border-[#CCCCCC] rounded-3xl py-2 px-6 text-2xl max-md:text-[10px] max-md:w-[150px] max-md:py-0 max-md:px-3' />
                </div>

                <div className='flex gap-10 items-center mt-8 max-md:gap-4'>
                    <h2 className='text-[28px] font-medium max-md:text-sm'>Choose color</h2>
                    <div className='flex gap-4 max-md:gap-2'>
                        {colorScheme.map((color, index) => (
                            <div key={index} className={`w-10 h-10 rounded-full ${color} ${selectedColor === color ? 'border-2 border-black' : ''} max-md:w-[18px] max-md:h-[18px]`}
                            onClick={() => setSelectedColor(color)} />
                            
                        ))}
                    </div>
                </div>

                <button type='submit' disabled={!isFormValid} className='bg-black text-white float-right rounded-lg text-xl py-1 px-10 mt-8'>Create</button>
            </form>
        </div>
  )
}

export default CreateModal