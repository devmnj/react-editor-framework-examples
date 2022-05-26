import { Editor } from "react-draft-wysiwyg";

const DraftWysiwyg = () => {
  return (
    <div className="editors">
      <Editor
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true }
        }}
      />
    </div>
  );
};

export default DraftWysiwyg;
