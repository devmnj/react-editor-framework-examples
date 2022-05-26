import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";

const MuiEditor = () => {
  const save = (data) => {
    console.log(data);
  };
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });

  return (
    <div className="editorContainer">
      <ThemeProvider theme={myTheme}>
        <MUIRichTextEditor
          label="Type something here..."
          onSave={save}
          inlineToolbar={true}
        />
      </ThemeProvider>
    </div>
  );
};

export default MuiEditor;
