import React from 'react';
import { playNote } from '../modules';

const BlackKey = ({ note }) => {
  return <div className="black-key" onClick={() => playNote(note)}></div>;
};

export default BlackKey;
