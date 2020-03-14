// React library
// react parses HTML like <div> and lets you write it in a javascript file
import React from 'react';

// components are react objects
// think of them like custom HTML elements
import WhiteKey from './components/WhiteKey';
import BlackKey from './components/BlackKey';

// idfk anything about music
const notes = [
  'c3',
  'c-3',
  'd3',
  'd-3',
  'e3',
  'f3',
  'f-3',
  'g3',
  'g-3',
  'a3',
  'a-3',
  'b3',
  'c4'
];

// cycle through all of these notes, and for each one
const PianoKeys = notes.map((note) => {
  // if it's a sharp, create a black key
  if (note.match('-3')) {
    return <BlackKey note={note} />;
    // if it's not, create a white key
  } else if (note.match('3')) {
    return <WhiteKey note={note} />;
    // top of the next octave
  } else if (note.match('-4')) {
    return <BlackKey note={note} />;
  } else if (note.match('4')) {
    return <WhiteKey note={note} />;
  }
});

// the App is actually a component we're exporting and using in another file
const App = () => <div className="container">{PianoKeys}</div>;

export default App;
