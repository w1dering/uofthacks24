import React from 'react';
import './TextBox.css';

interface TextBoxProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const TextBox = ({ value, onChange, onKeyDown }: TextBoxProps) => {
  return (
    <textarea
      className="chat-textbox"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder="Type your message..."
    />
  );
};

export default TextBox;
