import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation, lastId }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
            <div className={`flex gap-4 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
            ${isSelected ? "bg-sky-500" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePic} alt="user avatar" />
                    </div>
                </div>

                <div>
                    <p className='font-bold text-gray-200'>{conversation.username}</p>
                </div>
            </div>


            {!lastId && <div className='divider my-0 py-0 h-1' />}
        </>
    )
}

export default Conversation




// import React from 'react'

// const Conversation = () => {
//     return (
//         <>
//             <div className='flex gap-4 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//                 <div className='avatar online'>
//                     <div className='w-12 rounded-full'>
//                         <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="user avatar" />
//                     </div>
//                 </div>

//                 <div>
//                     <p className='font-bold text-gray-200'>John Doe</p>
//                 </div>
//             </div>

//             <div className='divider my-0 py-0 h-1'/>
//         </>
//     )
// }

// export default Conversation
