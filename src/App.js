import React, { useState } from 'react';
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [fontSize, setFontSize] = useState('');

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value + 'px');
  };

  const pageStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: fontSize,
  };

  return (
    <div className="App" style={pageStyle}>
      <h1>Change Page Style</h1>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input type="color" id="backgroundColor" onChange={handleBackgroundColorChange} />

        <label htmlFor="textColor">Text Color:</label>
        <input type="color" id="textColor" onChange={handleTextColorChange} />

        <label htmlFor="fontSize">Font Size:</label>
        <input type="number" id="fontSize" min="12" max="48" onChange={handleFontSizeChange} />
      </div>
      <p>Welcome to the styled page!</p>
    </div>
  );
}

export default App;
