import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { MdSend } from 'react-icons/md';

import { fetchLastMessages } from '../../ApiServices/MessagesService';

import MessagePreview from '../../components/MessagePreview/MessagePreview';

import { Message } from '../../types/serverDataInterfaces';
import './MessagesPage.scss';

const MessagesPage = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(-1);
  const { data, isLoading, isError } = useQuery('lastMessages', fetchLastMessages);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred</p>;

  const renderLastMessages = data?.data.map(({ body, from, date }: Message, index: number) => {
    return (
      <MessagePreview
        onClick={() => setSelectedChatIndex(index)}
        body={body} 
        from={from} 
        date={date} 
        key={index} 
        selected={selectedChatIndex === index ? true : false} />
    );
  });

  return (
    <div className='messages-page-container'>
      <div className='chats'>
        {renderLastMessages}
      </div>

      <div className='open-chat'>
        <div className='chat-screen'>

        </div>

        <div className='message-input-container'>
          <textarea placeholder='Write something'></textarea>

          <MdSend className='send-icon' size={50} color='#fff' />
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
