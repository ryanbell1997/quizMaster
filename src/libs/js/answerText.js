import React from 'react';

class AnswerText extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteAnswer = this.handleDeleteAnswer.bind(this);
        this.handleUpdateAnswer = this.handleUpdateAnswer.bind(this);
    }

    handleDeleteAnswer() {
        const { index, deleteAnswer } = this.props;
        deleteAnswer(index);
    }

    handleUpdateAnswer(event) {
        const answerText = event.target.value;
        const { updateAnswer, index} = this.props;
        updateAnswer(index, answerText);
    }


    
    render(){
        const { index, answer } = this.props;
        const placeholderText = "Enter answer here...";
        return (
            <div className="input">
                <label htmlFor="answer">Answer {index+1}:</label>
                <input name="answer" type="text" placeholder={placeholderText} onChange={this.handleUpdateAnswer} value={answer}></input>
                <input type="radio" name="answerCheck" id="answerCheck" ></input>
                <button type="button" onClick={this.handleDeleteAnswer}>X</button>
            </div>
        )
    }
}

export default AnswerText;