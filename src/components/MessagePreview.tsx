import React from 'react';

interface MessagePreviewProps {
  from: string;
  date: string;
  body: string;
}

const MessagePreview = ({ from, date, body }: MessagePreviewProps) => {

  return (
    <div>
      <div>
        <h5>{from}</h5>
        <p>{date}</p>
      </div>

      <p>{body}</p>
    </div>
  );
}

export default MessagePreview;
