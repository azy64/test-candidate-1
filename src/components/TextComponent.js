import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function TextComponent({ text }) {
  const [textInput, setTextInput] = useState('');
  useEffect(() => {
    setTextInput(text);
  }, [text]);
  return (
    <div
      placeholder="Search Band"
      style={{
        width: '95%',
        boderRadius: '10px',
        height: '20px',
        border: '1px solid #ccc',
        background: 'white',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '3px',
        marginBottom: '3px',
      }}
    >
      {textInput}
    </div>
  );
}
TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
