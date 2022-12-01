import React from 'react';
import { useQuery } from 'react-query';

import { fetchLastMessages } from '../../ApiServices/messagesService';

import MessagePreview from '../../components/MessagePreview';

import './MessagesPage.scss';

const MessagesPage = () => {
  const { data, isLoading, isError } = useQuery('lastMessages', fetchLastMessages);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred</p>;
  console.log(data);

  const lastMessages = data?.data.map(({ body, from, date }, index) => {
    return <MessagePreview body={body} from={from} date={date} key={index} />
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
