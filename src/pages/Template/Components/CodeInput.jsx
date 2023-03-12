import React, { useState, useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from '@mui/material';

function CodeInput() {

  const [fileText, setFileText] = useState('');

  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      setFileText(fileContent);
    };
    reader.readAsText(file);
  }
  
  const handleButtonClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} />
      <textarea style={{ width: '100%',  resize: 'none' }} value={fileText} onChange={(event) => setFileText(event.target.value)} />
      <Button variant="outlined" onClick={handleButtonClick}>Subir archivo base</Button>
      <SyntaxHighlighter language="c" style={docco} showLineNumbers={true}>
      {fileText}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeInput;