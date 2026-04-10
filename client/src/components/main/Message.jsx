import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
    const { authuser } = useAuthContext();
    const { selectedConversation } = useConversation();

    const formattedTime = extractTime(message.createdAt)
    const fromMe = message.senderId === authuser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'
    const profilePic = fromMe ? authuser.profilePic : selectedConversation?.profilePic;
    const bubbleBg = fromMe ? 'bg-blue-500' : "bg-slate-800";

    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profilePic}
                        />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="text-xs text-black">{formattedTime}</time>
                </div>
                <div className={`chat-bubble text-white ${bubbleBg} ${shakeClass}`}>{message.message}</div>
            </div>

        </>
    )
}

export default Message
