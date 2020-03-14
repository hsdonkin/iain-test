import React from 'react';

import WhiteKey from './components/WhiteKey';
import BlackKey from './components/BlackKey';

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

const PianoKeys = notes.map((note) => {
  if (note.match('-3')) {
    return <BlackKey note={note} />;
  } else if (note.match('3')) {
    return <WhiteKey note={note} />;
  } else if (note.match('4')) {
    return <WhiteKey note={note} />;
  }
});

const App = () => <div className="container">{PianoKeys}</div>;

export default App;
