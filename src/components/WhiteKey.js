// React library
// react parses HTML like <div> and lets you write it in a javascript file
import React from 'react';
// this is the function that actually plays the note
import { playNote } from '../modules';

// onClick is a user action called an Event
const WhiteKey = ({ note }) => {
  return <div className="white-key" onClick={() => playNote(note)}></div>;
};

export default WhiteKey;
