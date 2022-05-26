import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { convertToRaw } from "draft-js";

const DraftJsEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const logContent = () => {
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");
    console.log(value);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  // We could make a toolbar component her to handle the formating tools
  // and replase the buttons with that.
  return (
    <div>
      <button onClick={onUnderlineClick}>U</button>
      <button onClick={onBoldClick}>
        <b>B</b>
      </button>
      <button onClick={onItalicClick}>
        <em>I</em>
      </button>
      <div className="editors">
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
      <div>
        <button onClick={logContent}>Log</button>
      </div>
    </div>
  );
};

export default DraftJsEditor;
