import React, { Component } from 'react';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
//import 'react-codemirror/node_modules/codemirror/mode/markdown/markdown';
// va a ejecurtar esta linea de codigo


class BinsEditor extends Component{

    onEditorChange(content){
        console.log(content);
        Meteor.call('bins.update',this.props.bin,content);

    }

    render(){
        return(

            <div className="col-xs-6">
                <h5>Input</h5>
                <Codemirror
                    value={this.props.bin.content}
                    onChange={this.onEditorChange.bind(this)}
                    options={{ mode:'markdown', lineNumbers:true}}/>
            </div>
        );
    }
}

export default BinsEditor;