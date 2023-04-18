import { BlocklyWorkspace } from 'react-blockly';
import './App.css';


const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT">XML</field></block></xml>';

function App() {
  return (
    <div className="App">
       <BlocklyWorkspace
          // toolboxConfiguration={toolboxConfiguration}
          workspaceConfiguration={{
            grid: {
              spacing: 20,
              length: 3,
              colour: "#ccc",
              snap: true,
            },
          }}
          initialXml={initialXml}
          // initialJson={serialState === "JSON" ? ConfigFiles.INITIAL_JSON : undefined}
          className="fill-height"
          // onWorkspaceChange={onWorkspaceChange}
          // onXmlChange={onXmlChange}
          // onJsonChange={onJsonChange}
        />
    </div>
  );
}

export default App;
