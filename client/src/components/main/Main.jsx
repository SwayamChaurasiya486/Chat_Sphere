import { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const Main = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
      
        //cleanup function
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className='flex-1 w-full min-w-0 flex flex-col'>
            {!selectedConversation ? <NoChatSelected /> : (
                <>
                    {/* Header */}
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text mr-2'>To:</span>
                        <span className='text-gray-900 font-bold'>{selectedConversation.username}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default Main;


const NoChatSelected = () => {
    const {authuser} = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome {authuser.fullname}</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}
