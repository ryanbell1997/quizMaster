import React from 'react';
import 'material-icons';
import '../css/addQuestion.css';
import AddTextQuestion from './addTextQuestion.js';

class QuizBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questions: []
        };
        this.addTextQuestion = this.addTextQuestion.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
        this.deleteAnswer = this.deleteAnswer.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
    }

    addTextQuestion() {
        let { questions } = this.state;
        let newQuestion = { text: '', answers: [] }
        questions.push(newQuestion);
        this.setState({ questions });
    }

    addAnswer(questionIndex, newAnswer) {
        let { questions } = this.state;
        questions[questionIndex].answers.push(newAnswer);
        this.setState({ questions });
    }

    deleteAnswer(questionIndex, answerIndex) {
        let { questions } = this.state;
        const questionsLen = questions.length;
        if (questionsLen) {
            questions[questionIndex].answers.splice(answerIndex, 1);
        this.setState({ questions });
        }
    }

    updateAnswer(questionIndex, answerIndex, answerText) {
        let { questions } = this.state;
        questions[questionIndex].answers[answerIndex] = answerText;
        this.setState({ questions });
    }

    render(){
        let children = [];

        const { questions } = this.state;

        let i=0;
        questions.forEach(question => {
            children.push(<AddTextQuestion 
                questionIndex={i} 
                question={question} 
                addAnswer={this.addAnswer} 
                deleteAnswer={this.deleteAnswer}
                updateAnswer={this.updateAnswer} />);
            i++
        })

        return (
            <div>
                <h2 className="builderHeader">Quiz Builder</h2>
                <div className="questionDiv" id="newQuestionContainer"></div>
                <form className="addQForm">
                {children}
                </form>           
                <button type="button" id="addQuestion" onClick={this.addTextQuestion}><i className="material-icons">add</i> Question</button>
                
            </div>
        )
   }  
}

export default QuizBuilder;