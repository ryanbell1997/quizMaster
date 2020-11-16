import React from 'react';
import './answerText.css';
import 'material-icons';

class AnswerText extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteAnswer = this.handleDeleteAnswer.bind(this);
        this.handleUpdateAnswer = this.handleUpdateAnswer.bind(this);
        this.handleMarkCorrectAnswer = this.handleMarkCorrectAnswer.bind(this);
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

    handleMarkCorrectAnswer(){
        const { markCorrectAnswer, index } = this.props;
        markCorrectAnswer(index);
    }


    
    render(){
        const { index, answer, questionIndex } = this.props;
        const placeholderText = `Enter answer ${index + 1} here...`;
        return (
            <div className="input">
                <input name={`answer_${index}`} type="text" placeholder={placeholderText} onChange={this.handleUpdateAnswer} className="answerInput" value={answer.text}></input>
                <button type="button" className="isCorrectButton" id={`answerCheck_${questionIndex}`} onClick={this.handleMarkCorrectAnswer}><i className="material-icons">done</i></button>
                <button type="button" onClick={this.handleDeleteAnswer}>X</button>
            </div>
        )
    }
}

export default AnswerText;