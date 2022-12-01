import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchLastMessages } from '../../ApiServices/messagesService';

import MessagePreview from '../../components/MessagePreview/MessagePreview';

import './MessagesPage.scss';

const MessagesPage = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(-1);
  const { data, isLoading, isError } = useQuery('lastMessages', fetchLastMessages);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred</p>;
  console.log(data);

  const lastMessages = data?.data.map(({ body, from, date }, index) => {
    return (
      <MessagePreview
        onClick={() => setSelectedChatIndex(index)}
        body={body} 
        from={from} 
        date={date} 
        key={index} 
        selected={selectedChatIndex === index ? true : false} />
    )
  });

  return (
    <div className='messages-page-container'>
      <div className='chats'>
        {lastMessages}
      </div>

      <div className='open-chat'>
        <p>Open Chat</p>
      </div>
    </div>
  );
}

export default MessagesPage;
