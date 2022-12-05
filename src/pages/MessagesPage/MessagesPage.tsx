import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchLastMessages } from '../../ApiServices/MessagesService';

import MessagePreview from '../../components/MessagePreview/MessagePreview';

import './MessagesPage.scss';

const MessagesPage = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(-1);
  const { data, isLoading, isError } = useQuery('lastMessages', fetchLastMessages);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred</p>;
  console.log(data);

  const renderLastMessages = data?.data.map(({ body, from, date }, index) => {
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

  const renderOpenChat = () => {
    if (selectedChatIndex >= 0) {
      return (
        <div className='open-chat-view'>

        </div>
      )
    }
  }

  return (
    <div className='messages-page-container'>
      <div className='chats'>
        {renderLastMessages}
      </div>

      <div className='open-chat'>
        {renderOpenChat()}
      </div>
    </div>
  );
}

export default MessagesPage;
