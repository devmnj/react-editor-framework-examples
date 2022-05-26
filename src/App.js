import './App.css';
import DraftJsEditor from './components/DraftEditor';
import DraftWysiwyg from './components/DraftWysiwyg';
import MuiEditor from './components/MuiEditor';
import {RemirrorEditor,RichTextEditor} from './components/RemirrorEditor';
import SlateEditor from './components/SlateEditor';
import TinyMceEditor from './components/TinyEditor';

function App() {
  return (
    <div className="App">
       <h2>Draft-js rich text editor</h2>
    <DraftJsEditor/>
    <h2>Draft-js WYSIG</h2>
    <DraftWysiwyg/>
     <h2>Slate Editor</h2>
     <SlateEditor/>
     <h2>MUI Editor</h2>
     <MuiEditor/>
     <h2>Remirror Editor</h2>
     <RemirrorEditor/>
     <h2>Tiny Editor</h2>
     <TinyMceEditor/>
      <h2>Rich Editor</h2>
      <RichTextEditor/>
    </div>
  );
}

export default App;
