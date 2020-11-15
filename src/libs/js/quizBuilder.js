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
        this.removeQuestion = this.removeQuestion.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
    }

    addTextQuestion() {
        //let { questions } this.state == this.state.questions!!
        let { questions } = this.state;
        //text and answers keys are intiialised in newQuestion.
        let newQuestion = { text: '', answers: [] }
        questions.push(newQuestion);
        //we set the state to the new list of questions.
        this.setState({ questions });
    }

    removeQuestion(questionIndex){
        let { questions } = this.state;
        const questionsLen = questions.length;
        if (questionsLen){
            console.log(questionIndex);
            questions.splice(questionIndex, 1);
        this.setState({ questions });
        }  
    }

    addAnswer(questionIndex, newAnswer) {
        let { questions } = this.state;
        //We get the specific questions object from state using the index (which is passed as prop), and then we add an answer to the answers array.
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

    updateQuestion(questionIndex, questionText) {
        let { questions } = this.state;
        questions[questionIndex].text = questionText;
        this.setState({ questions });
    }

    render(){
        let questionChildren = [];

        const { questions } = this.state;

        let i=0;
        questions.forEach(question => {
            questionChildren.push(<AddTextQuestion 
                key={`q_${i}`}
                questionIndex={i} 
                question={question} 
                addAnswer={this.addAnswer} 
                deleteAnswer={this.deleteAnswer}
                updateAnswer={this.updateAnswer}
                removeQuestion={this.removeQuestion} 
                updateQuestion={this.updateQuestion} />);
            i++
        })

        return (
            <div>
                <h2 className="builderHeader">Quiz Builder</h2>
                <div className="questionDiv" id="newQuestionContainer"></div>
                <form className="addQForm">
                {questionChildren}
                </form>           
                <button type="button" id="addQuestion" onClick={this.addTextQuestion}><i className="material-icons">add</i> Question</button>

            </div>
        )
   }  
}

export default QuizBuilder;