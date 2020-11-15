import React from 'react';
import '../css/addQuestion.css';
import AnswerText from './answerText.js';

class AddTextQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddAnswer = this.handleAddAnswer.bind(this);
        this.handleDeleteAnswer = this.handleDeleteAnswer.bind(this);
        this.handleUpdateAnswer = this.handleUpdateAnswer.bind(this);
    }

    // questionIndex={i} question={this.state.question[i]} deleteAnswer={this.deleteAnswer} addAnswer={this.addAnswer}

    handleAddAnswer(){
        let { addAnswer, questionIndex } = this.props;
        addAnswer(questionIndex);
    }

    handleDeleteAnswer(answerIndex) {
        const { questionIndex, deleteAnswer } = this.props;
        deleteAnswer(questionIndex, answerIndex);
    }

    handleUpdateAnswer(answerIndex, answerText) {
        const { questionIndex, updateAnswer } = this.props;
        updateAnswer(questionIndex, answerIndex, answerText);
    }

    
    
    render(){

        const { question, updateAnswer } = this.props;
        const { text, answers } = question;
        let answersLen = 0
        if (question && answers) {
            answersLen = answers.length;
        }

        const answerButton = answersLen < 4 ? 
            <button type="button" onClick={this.handleAddAnswer}><i className="material-icons">add</i>Answer</button> : 
            <button type="button">Max of 4 answers</button>

        let answersEls = [];
        let i=0;
        if (answers) {
            answers.forEach(answer => {
                answersEls.push(<div>
                    <AnswerText 
                    index={i} 
                    answer={answer} 
                    deleteAnswer={this.handleDeleteAnswer} 
                    updateAnswer={this.handleUpdateAnswer} />
                    </div>);
                i++;
            });
        }

        return (
        <div className="qContainer">

                <div className="questionContainer containers">
                        <h3 className="qNo">Question {this.props.questionIndex + 1}</h3>
                        <div className="input">
                            <label htmlFor="question">Question:</label>
                            <input name="question" type="text" id="question" placeholder={text}></input>
                        </div>
                </div>
              
                <div className="answerContainer containers">
                    {answersEls}
                    {answerButton}
                    
                </div>
        </div>
        );
    }
}

export default AddTextQuestion;