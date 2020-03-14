import React from 'react';
import { playNote } from '../modules';

const WhiteKey = ({ note }) => {
  return <div className="white-key" onClick={() => playNote(note)}></div>;
};

export default WhiteKey;
