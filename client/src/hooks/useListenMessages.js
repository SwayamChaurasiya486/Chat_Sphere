import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation';
import { useEffect } from 'react';

import notificationSound from "../assets/sound/notification.mp3"

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages, selectedConversation} = useConversation();
    
    useEffect(() =>{
        socket?.on("newMessage", (newMessage) =>{
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            
            // Only play sound and append message if from the currently selected chat
            // To prevent appending messages from other users into the active chat window
            if (selectedConversation?._id === newMessage.senderId) {
                sound.play().catch(e => console.log("Audio play blocked by browser", e));
                setMessages([...messages, newMessage])
            }
        })
        return () => socket?.off("newMessage");

    }, [socket, setMessages, messages, selectedConversation]);
};

export default useListenMessages
