import React from 'react';

interface DataDisplayProps {
  data: any[];
  type: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data, type }) => {
  return (
    <div>
      <ul style={listStyle}>
        {data.slice(0, 10).map((item) => (
          <li key={item.id} style={listItemStyle}>
            {renderItem(item, type)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
};

const listItemStyle: React.CSSProperties = {
  padding: '10px',
  borderBottom: '1px solid #ccc',
};

function renderItem(item: any, type: string) {
  switch (type) {
    case 'posts':
      return `${item.title}`;
    case 'albums':
      return `${item.title}`;
    case 'users':
      return `${item.name} (${item.email})`;
    default:
      return JSON.stringify(item);
  }
}

export default DataDisplay;
