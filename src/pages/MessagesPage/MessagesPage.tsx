import React, { useState, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import io from 'socket.io-client';
import { MdSend } from 'react-icons/md';

import { fetchLastMessages, sendMessage } from '../../ApiServices/MessagesService';

import MessagePreview from '../../components/MessagePreview/MessagePreview';
import ChatRoom from '../../components/ChatRoom/ChatRoom';

import { Message } from '../../types/serverDataInterfaces';
import { SentMessage } from '../../types/clientDataInterfaces';
import './MessagesPage.scss';

// const connectChatServer = () => {
//   const socket = io('http://localhost:3000/', {
//     transports: ['websocket'],
//     path: '/'
//   });

//   socket.onAny((type, message) => console.log(type, message));

//   return socket;
// }

const MessagesPage = () => {
  const [selectedChatId, setSelectedChatId] = useState(-1);
  const { data, isLoading, isError } = useQuery('lastMessages', fetchLastMessages);

  const textAreaEl = useRef<HTMLTextAreaElement>(null);

  const sendMessageMutation = useMutation((newMessage: SentMessage) => sendMessage(newMessage));

  // useEffect(() => {
  //   const socket = io('http://localhost:3000');
  //   // const socket = connectChatServer();
  //   // console.log('useEffect')
  //   // socket.connect();

  //   // socket.onAny(() => {});

  //   // return () => {
  //   //   socket.disconnect();
  //   // }
  // }, []);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred</p>;

  const handleSendMessageClick = () => {
    if (selectedChatId > 0 && textAreaEl.current?.value) {
      sendMessageMutation.mutate({ body: textAreaEl.current?.value, toUserId: selectedChatId });
    }
  }

  const renderLastMessages = data?.data.map(({ body, from_user_id, from_user_name, date_time }: Message, index: number) => {
    return (
      <MessagePreview
        onClick={() => setSelectedChatId(from_user_id)}
        body={body} 
        from={from_user_name} 
        date={date_time} 
        key={index} 
        selected={selectedChatId === from_user_id ? true : false} />
    );
  });

  return (
    <div className='messages-page-container'>
      <div className='chats'>
        {renderLastMessages}
      </div>

      <div className='open-chat'>
        <ChatRoom chatId={selectedChatId} />

        <div className='message-input-container'>
          <textarea ref={textAreaEl} placeholder='Write something'></textarea>

          <MdSend onClick={() => handleSendMessageClick()} className='send-icon' size={50} color='#fff' />
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
