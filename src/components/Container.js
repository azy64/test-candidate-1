import React, { useState, useEffect } from 'react';
import InputComponent from './InputComponent';
import TextComponent from './TextComponent';

export default function Container() {
  const [list, setList] = useState([]);
  const tab = ['A', 'B', 'C', 'D', 'E'];
  const displayElement = () => {
    const tmp = [];
    tab.map((item) => {
      tmp.push(<TextComponent key={item} text={item} />);
      return item;
    });
    setList(tmp);
  };
  const change = () => {
    const tmp1 = list;
    const first = tmp1.shift();
    tmp1.push(first);
    setList(tmp1);
  };
  useEffect(() => {
    if (list.length === 0) { displayElement(); }
    setInterval(change, 1500);
  }, [list]);
  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <InputComponent />
      <div style={{
        width: '200px', height: '150px', background: 'gray', marginTop: '10px', padding: '5px',
      }}
      >
        {list}
      </div>
    </div>

  );
}
