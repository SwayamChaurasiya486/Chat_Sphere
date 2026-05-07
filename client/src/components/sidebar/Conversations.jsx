import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';


const Conversations = ({ onSelectConversation }) => {
  const {loading, conversations} =  useGetConversations();

  return (
    <div className='py-2 flex-1 sm:h-80 md:h-[28rem] flex flex-col gap-2 overflow-auto'>
     {conversations.map((conversation, idx) => (
      <Conversation 
      key={conversation._id}
      conversation = {conversation}
      lastId = {idx === conversations.length - 1}
      onSelect={onSelectConversation}
      />
     ))}
   
    {loading ? <span className='loading loading-spinner mx-auto'></span> : null }
    </div>
  )
}

export default Conversations

