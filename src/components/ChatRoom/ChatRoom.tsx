import React from 'react';
import { useQuery } from 'react-query';

import { fetchConversationHistory } from '../../ApiServices/MessagesService';

import { Message } from '../../types/serverDataInterfaces';

import './ChatRoom.scss';

interface ChatHistoryProps {
  chatId: number;
}

const ChatRoom = ({ chatId }: ChatHistoryProps) => {
  const { data: messageHistory, isLoading } = useQuery(['messageHistory', chatId], () => fetchConversationHistory(chatId), { enabled: chatId > 0 });

  if (isLoading) return <div className='chat-history-screen'><p>Loading...</p></div>

  const renderMessages = messageHistory?.data.map(({ body, type }: Message, index: number) => {
    return (
      <div className='message-position-container' key={index}>
        <div className={type === 'received' ? 'received-message' : 'sent-message'}>
          {body}
        </div>
      </div>
    )
  })

  return (
    <div className='chat-history-screen'>
      {renderMessages}
    </div>
  );
}

export default ChatRoom;
