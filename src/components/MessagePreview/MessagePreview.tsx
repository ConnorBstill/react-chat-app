import React, { useState } from 'react';

import { DateTime } from 'luxon';

import './MessagePreview.scss';

interface MessagePreviewProps {
  from: string;
  date: string;
  body: string;
  selected: boolean;
  onClick: any;
}

const formatDate = (date: string) => {
  const dateTime = new Date(date).toLocaleDateString('en-us', { month: 'short', day: 'numeric' });
  // .toLocaleDateString('en-us', { month: 'short', day: 'numeric' });

  return dateTime;
}

const MessagePreview = ({ from, date, body, selected, onClick }: MessagePreviewProps) => {
  const setSelectedBackground = { backgroundColor: selected ? '#737373' : '#484848' }

  return (
    <div onClick={() => onClick()} className='message-preview-container' style={setSelectedBackground}>
      <div className='header-container'>
        <h4>{from}</h4>
        <p>{formatDate(date)}</p>
      </div>

      <p>{body}</p>
    </div>
  );
}

export default MessagePreview;
