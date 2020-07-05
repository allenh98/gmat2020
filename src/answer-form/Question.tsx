import React from 'react';
import ReactHtmlParser from 'react-html-parser';


export default function Question(props: any){
    return (
        <React.Fragment>
            <h1>
                Question {props.idx + 1} of {props.total}
            </h1>
            <p className="question">
                {ReactHtmlParser(props.question)}
            </p>
        </React.Fragment>
        
    );
}