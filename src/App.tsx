// import { BlocklyWorkspace } from 'react-blockly';
import Blockly,{Block} from "blockly";
import BlocklyComponent, { ToolboxDefinition  ,BlocklyWorkspace } from 'react-blockly';

// import { BlocklyWorkspace, BlocklyComponent, ToolboxDefinition } from 'react-blockly';


import './App.css';


const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT">XML</field></block></xml>';


const workspaceConfiguration = {
  trashcan: true,
  // Add other workspace configuration options as needed
};


  const toolboxConfiguration: ToolboxDefinition = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'main',
      },
      {
        kind: 'separator',
      },
      {
        kind: 'block',
        type: 'errorcodes',
      },
      {
        kind: 'separator',
      },
      {
        kind: 'block',
        type: 'log_ger',
      },
      {
        kind: 'separator',
      },
      {
        kind: 'block',
        type: 'log_format',
      },
      {
        kind: 'separator',
      },
      {
        kind: 'block',
        type: 'start',
      },
    ],
  };


  Blockly.Blocks['main'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("\"Please enter the id\"");
      this.appendValueInput("description")
          .setCheck("String")
          .appendField("\"Please enter the description\"");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['errorcodes'] = {
    init: function() {
      this.appendValueInput("ID")
          .setCheck("String")
          .appendField("Please enter the valid ID")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendDummyInput()
          .appendField("log");
      this.appendValueInput("Messages")
          .setCheck("String")
          .appendField("Please enter the valid message")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendValueInput("Severity")
          .setCheck("String")
          .appendField("Please enter the valid input for Severity")
          .appendField(new Blockly.FieldDropdown([["High","High"], ["Medium","Medium"], ["Low","Low"]]), "NAME");
      this.appendDummyInput()
          .appendField("Arguments");
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("Please enter the name for Arguments")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendValueInput("Description_")
          .setCheck("String")
          .appendField("Please enter the description  for Arguments")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendDummyInput()
          .appendField("Resolution");
      this.appendValueInput("Description")
          .setCheck("String")
          .appendField("Please enter the description for Resolution")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendValueInput("Owner")
          .setCheck("String")
          .appendField("Please enter the valid input for Owner")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendValueInput("Self-Healing")
          .setCheck("String")
          .appendField("Please enter the valid input for Self-Healing")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendValueInput("References")
          .setCheck("String")
          .appendField("Please enter the valid input for References")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendDummyInput()
          .appendField("Returncodes");
      this.appendValueInput("HTTP")
          .setCheck("String")
          .appendField("Please enter the valid input for HTTP")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendValueInput("Console")
          .setCheck("Number")
          .appendField("Please enter the valid input for console")
          .appendField(new Blockly.FieldNumber(1, 1, 100000000), "size");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(170);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['log_ger'] = {
    init: function() {
      this.appendValueInput("type")
          .setCheck("String")
          .appendField("\"please enter valid type for logger\"")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendValueInput("plugin")
          .setCheck("String")
          .appendField("\"please enter valid plugin\"")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendDummyInput()
          .appendField("plugin-data");
      this.appendValueInput("\"File-path\"")
          .setCheck("String")
          .appendField("Please enter the valid file path")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendValueInput("Max-log-size")
          .setCheck("Number")
          .appendField("Please enter the max log size")
          .appendField(new Blockly.FieldNumber(1, 1), "");
      this.appendValueInput("Max-log-files")
          .setCheck("Number")
          .appendField("Please enter the max log files")
          .appendField(new Blockly.FieldNumber(1, 1), "");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(280);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['log_format'] = {
    init: function() {
      this.appendValueInput("order")
          .setCheck("String")
          .appendField("\"please enter the order\"")
          .appendField(new Blockly.FieldDropdown([["asctime","asctime"], ["service","service"], ["req_id","req_id"], ["severity","severity"], ["id","id"], ["message","message"]]), "order");
      this.appendValueInput("delimeter")
          .setCheck("String")
          .appendField("\"please enter dropdown \"")
          .appendField(new Blockly.FieldDropdown([["\"/\"","\"/\""], ["\"|\"","\"|\""], ["others","others"]]), "option");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(140);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['start'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("\"Please enter the id\"")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.appendValueInput("description")
          .setCheck("String")
          .appendField("\"Please enter the description\"")
          .appendField(new Blockly.FieldTextInput(""), "");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(100);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  const generateCode = (workspace: Blockly.Workspace) => {
  return Blockly.JavaScript.workspaceToCode(workspace);
};




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
            trashcan: true,
            scrollbars: true,
          }}
          
          toolboxConfiguration = {toolboxConfiguration}
          // initialXml={initialXml}
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
