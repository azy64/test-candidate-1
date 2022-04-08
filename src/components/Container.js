import React, { useState } from 'react';
import InputComponent from './InputComponent';

export default function Container() {
  const [list, setList] = useState([]);
  return (
    <div>
      <InputComponent />
      <div style={{ width: '200px', background: 'gray' }}>{list}</div>
    </div>

  );
}
