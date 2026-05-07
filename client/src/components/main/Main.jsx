import { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from "react-icons/ti";
import { RiMenu3Line } from "react-icons/ri";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import { useSocketContext } from '../../context/SocketContext';

const Main = ({ onOpenSidebar }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { onlineUsers } = useSocketContext();
    const isOnline = selectedConversation ? onlineUsers.includes(selectedConversation._id) : false;

    useEffect(() => {
      
        //cleanup function
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className='flex-1 w-full min-w-0 flex flex-col'>
            {!selectedConversation ? <NoChatSelected onOpenSidebar={onOpenSidebar} /> : (
                <>
                    {/* Header */}
                    <div className='sticky top-0 z-50 bg-slate-700/50 backdrop-blur-sm px-4 py-3 flex items-center gap-3 border-b border-slate-600 shadow-sm'>
                        {/* Hamburger — mobile only */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onOpenSidebar();
                            }}
                            aria-label='Open conversations sidebar'
                            aria-haspopup='dialog'
                            className='sm:hidden p-2 -ml-2 rounded-md text-gray-200 hover:text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400'
                        >
                            <RiMenu3Line className='w-6 h-6' />
                        </button>
                        
                        {/* User Avatar */}
                        <div className={`avatar ${isOnline ? "online" : ""}`}>
                            <div className='w-10 h-10 rounded-full border border-slate-500 bg-slate-600'>
                                <img src={selectedConversation.profilePic} alt='user avatar' />
                            </div>
                        </div>
                        
                        {/* User Info */}
                        <div className='flex flex-col'>
                            <span className='text-gray-100 font-bold leading-tight'>{selectedConversation.username}</span>
                            <span className='text-xs text-sky-300'>{isOnline ? 'Online' : 'Offline'}</span>
                        </div>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default Main;


const NoChatSelected = ({ onOpenSidebar }) => {
    const {authuser} = useAuthContext();
    return (
        <div className='flex flex-col items-center justify-center w-full h-full gap-4 relative'>
            {/* Hamburger for the empty state — mobile only */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onOpenSidebar();
                }}
                aria-label='Open conversations sidebar'
                aria-haspopup='dialog'
                className='sm:hidden absolute top-4 left-4 z-50 p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400'
            >
                <RiMenu3Line className='w-6 h-6' />
            </button>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome {authuser.fullname}</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}


