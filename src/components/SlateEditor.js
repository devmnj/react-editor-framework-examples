import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const SlateEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }]
    }
  ];
  const [value, setValue] = useState(initialValue);

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <Editable />
    </Slate>
  );
};

export default SlateEditor;
