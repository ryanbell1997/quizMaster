import React from 'react';

class AnswerText extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="input">
                <label htmlFor="answer1">Answer {this.props.qNo}</label>
                <input name="answer1" type="text" id="answer"></input>
                <input type="radio" name="answerCheck" id="answerCheck" ></input>
            </div>
        )
    }
}

export default AnswerText;