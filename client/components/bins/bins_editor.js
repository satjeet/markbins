import React, { Component } from 'react';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
//import 'react-codemirror/node_modules/codemirror/mode/markdown/markdown';
// va a ejecurtar esta linea de codigo


class BinsEditor extends Component{
    render(){
        return(

            <div className="col-xs-6">
                <h5>Input</h5>
                <Codemirror options={{ mode:'markdown', lineNumbers:true}}/>
            </div>
        );
    }
}

export default BinsEditor;