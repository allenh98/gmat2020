import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../answer-form/Answers.css';

export default function Solution(props: any) {


    return (
            <div className="solution">
                <ul>
                    {props.solutions.map((el:any, i:number) => {
                        return (
                            <li>
                                <h1>Explanation {i + 1} of {props.solutions.length} </h1><br/>
                                {ReactHtmlParser(el.post)}
                            </li>
                        )
                    })}                    
                </ul>
            </div>

    );
}

