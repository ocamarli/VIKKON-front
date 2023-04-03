import React, { useState, useRef, useEffect } from "react";
import { Button, Box, Grid, Divider } from "@mui/material";

import CodeEditor from "@uiw/react-textarea-code-editor";
import { light } from "@mui/material/styles/createPalette";
import { useTheme } from "@mui/material";

function CodeInput(props) {
  const {setMatches}=props
  const [fileText, setFileText] = useState("");
  const [parameterCode, setParameterCode] = useState([]);
  const theme = useTheme();
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      setFileText(content);
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    const regex = /\{(.+?)\}/g; // Agregamos la flag "g" para encontrar todas las coincidencias
    const matches = fileText.match(regex);
    if (matches) {
      const foundValues = matches.map((match) =>
        match.substring(1, match.length - 1)
      ); // Removemos los caracteres "{ }"
      setParameterCode(foundValues);
      setMatches(foundValues)
      console.log(foundValues);
    } else {
      setParameterCode([]);
      setMatches([])
    }
  }, [fileText]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <>
          <input
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <textarea
            value={fileText}
            onChange={(event) => setFileText(event.target.value)}
            style={{ display: "none" }}
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "justifyContent",
            }}
          >
            <Button variant="outlined" onClick={handleButtonClick}>
              Upload base code
            </Button>
            <Button variant="contained" onClick={handleButtonClick}>
              Save
            </Button>
          </Box>
        </>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} style={{overflowY: 'scroll', maxHeight: '500px', fontSize: ".6em" }}>
        <CodeEditor
          data-color-mode={theme.palette.mode}
          value={fileText}
          language="c"
          placeholder="code."
          onChange={(evn) => setFileText(evn.target.value)}
          padding={15}
          style={{
            minWith:"100%",
            fontSize: 12,

          }}
        />

      </Grid>
      <Grid item xs={12}>
        {parameterCode.map((code, index) => (
          <div key={index}>{code}</div>
        ))}
      </Grid>
    </Grid>
  );
}

export default CodeInput;
