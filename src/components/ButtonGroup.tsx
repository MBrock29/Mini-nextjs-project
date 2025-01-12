'use client';

import React from 'react';

interface ButtonGroupProps {
  onClick: (type: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onClick }) => {
  return (
    <div style={buttonGroupStyle}>
      <button style={buttonStyle} onClick={() => onClick('posts')}>
        Posts
      </button>
      <button style={buttonStyle} onClick={() => onClick('albums')}>
        Albums
      </button>
      <button style={buttonStyle} onClick={() => onClick('users')}>
        Users
      </button>
    </div>
  );
};

const buttonGroupStyle: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
  marginTop: '20px',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#0070f3',
  color: 'white',
};

export default ButtonGroup;
