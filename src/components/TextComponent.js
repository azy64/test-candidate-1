import React, { useState, useEffect } from 'react';
import PropsType from 'props-type';

export default function TextComponent({ text }) {
  const [textInput, setTextInput] = useState('');
  useEffect(() => {
    setTextInput(text);
  }, [text]);
  return (
    <div style={{ width: '90%', boderRadius: '3px', height: '30px' }}>{textInput}</div>
  );
}
TextComponent.propTypes = {
  text: PropsType.string.isRequired,
};
