import React from 'react';
import './textQuestion.css';
import AnswerText from '../answerText/answerText.js';

class TextQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddAnswer = this.handleAddAnswer.bind(this);
        this.handleDeleteAnswer = this.handleDeleteAnswer.bind(this);
        this.handleUpdateAnswer = this.handleUpdateAnswer.bind(this);
        this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
        this.handleUpdateQuestion = this.handleUpdateQuestion.bind(this);
        this.handleMarkCorrectAnswer = this.handleMarkCorrectAnswer.bind(this);
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

    handleRemoveQuestion() {
        const { questionIndex, removeQuestion } = this.props;
        removeQuestion(questionIndex);
    }

    handleUpdateQuestion(event){
        const questionText = event.target.value;
        const { updateQuestion, questionIndex, removeQuestion } = this.props;
        updateQuestion(questionIndex, questionText);
    }

    handleMarkCorrectAnswer(answerIndex){
        const { questionIndex, markCorrectAnswer } = this.props;
        markCorrectAnswer(questionIndex, answerIndex);
    }

    render(){

        const { question, questionIndex } = this.props;
        const { text, answers } = question;
        let answersLen = 0
        if (question && answers) {
            answersLen = answers.length;
        }

        const answerButton = answersLen < 4 ? 
            <button type="button" onClick={this.handleAddAnswer} className="addAnswerButton"><i className="material-icons">add</i>Answer</button> : 
            <button type="button" className="addAnswerButton">Max of 4 answers</button>

        let answersEls = [];
        let i=0;
        if (answers) {
            answers.forEach(answer => {
                answersEls.push(<div>
                    <AnswerText
                    key={`q_${questionIndex}_a_${i}`} 
                    index={i} 
                    answer={answer}
                    questionIndex={questionIndex} 
                    deleteAnswer={this.handleDeleteAnswer} 
                    updateAnswer={this.handleUpdateAnswer}
                    markCorrectAnswer={this.handleMarkCorrectAnswer} />
                    </div>);
                i++;
            });
        }

        return (
        <div className="qContainer">

                <div className="questionContainer containers">
                        <h3 className="qNo">Question {this.props.questionIndex + 1}</h3>
                        <div className="input">
                            <label htmlFor={`question_${questionIndex}`}>Question:</label>
                            <input name={`question_${questionIndex}`} type="text" id={`question_${questionIndex}`} placeholder={text} onChange={this.handleUpdateQuestion} value={text} className="questionInput"></input>
                        </div>
                </div>
              
                <div className="answerContainer containers">
                    <h3 className="qNo">Answers</h3>
                    {answersEls}
                    {answerButton}
                    
                </div>
                <button type="button" id="removeQuestion" onClick={this.handleRemoveQuestion}>x</button>
        </div>
        );
    }
}

export default TextQuestion;