'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
  const router = useRouter();

  return (
    <button style={backButtonStyle} onClick={() => router.back()}>
      Go Back
    </button>
  );
};

const backButtonStyle: React.CSSProperties = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  marginRight: '10px',
};

export default BackButton;
