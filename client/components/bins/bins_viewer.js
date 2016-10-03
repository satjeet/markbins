import React, { Component } from 'react';
//import Codemirror from 'react-codemirror';
//import 'codemirror/mode/markdown/markdown';
import {markdown} from 'markdown';

class BinsViewer extends Component{


    render(){
        const rawHTML=markdown.toHTML(this.props.bin.content);
        //rawHTML en estos momentos es un string


        return(

            <div className="col-xs-4">
                <h5>Output</h5>
                <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>

            </div>
        );
    }
}

export default BinsViewer;