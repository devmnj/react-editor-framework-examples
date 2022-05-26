import { SocialEditor } from "@remirror/react-editors/social";
import { WysiwygEditor } from "@remirror/react-editors/wysiwyg";

const RemirrorEditor = () => {
  const USERS = [
    { id: "joe", label: "Joe" },
    { id: "john", label: "John" }
  ];
  const TAGS = ["remirror", "editor"];

  return (
    <div style={{ padding: 16 }}>
      <SocialEditor users={USERS} tags={TAGS} />
    </div>
  );
};

 
 
 const    RichTextEditor=()=> {
   return (
     <div><WysiwygEditor/></div>
   )
 }
 
export   {RemirrorEditor,RichTextEditor};

