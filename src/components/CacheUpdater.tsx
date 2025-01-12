'use client';

import React from 'react';

interface CacheUpdaterProps {
  type: string;
}

const CacheUpdater: React.FC<CacheUpdaterProps> = ({ type }) => {
  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/invalidate-cache', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to invalidate cache.');
      }

      alert(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button style={updateButtonStyle} onClick={handleUpdate}>
      Invalidate cached data
    </button>
  );
};

const updateButtonStyle: React.CSSProperties = {
  marginTop: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#ff4081',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
};

export default CacheUpdater;
