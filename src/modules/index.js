const playNote = (note) => {
  console.log(note);
  const noteFile = new Audio(`/src/notes/${note}.mp3`);
  noteFile.play();
};

export { playNote };
