import React from 'react';
import 'material-icons';
import './quizBuilder.css';
import TextQuestion from '../textQuestion/textQuestion.js';
import AjaxPOST from '../js/ajaxPOST.js';

class QuizBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questions: [],
        };
        this.addTextQuestion = this.addTextQuestion.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
        this.deleteAnswer = this.deleteAnswer.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
        this.printQuestion = this.printQuestion.bind(this);
        this.markCorrectAnswer = this.markCorrectAnswer.bind(this);
        this.saveQuiz = this.saveQuiz.bind(this)
        this.handleSetQuizID = this.handleSetQuizID.bind(this);
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

    markCorrectAnswer(questionIndex, answerIndex){
        let { questions } = this.state;
        questions[questionIndex].answers.forEach(answer => {
            answer.isCorrect = false;
        })
        if(!questions[questionIndex].answers[answerIndex].isCorrect){
            questions[questionIndex].answers[answerIndex].isCorrect = true;
            this.setState({ questions });
        }
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

    addAnswer(questionIndex) {
        let { questions } = this.state;
        //We get the specific questions object from state using the index (which is passed as prop), and then we add an answer to the answers array.
        let newAnswer = { text: '', isCorrect: false };
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
        questions[questionIndex].answers[answerIndex].text = answerText;
        this.setState({ questions });
    }

    updateQuestion(questionIndex, questionText) {
        let { questions } = this.state;
        questions[questionIndex].text = questionText;
        this.setState({ questions });
    }

    printQuestion(){
        const { questions } = this.state;
        const questionLen = questions.length;
        if(questionLen){
            console.log(questions);
        }
    }
    
    saveQuiz(){
        const { questions } = this.state;
        const requestObject = {questions};
        fetch('/storeQuiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then((result) => {
                this.handleSetQuizID(result);
            },
            (error) => {
                console.log(error);
            })
    }

    handleSetQuizID(input){
        const { setQuizID } = this.props;
        setQuizID(input);
    }

    render(){
        let questionChildren = [];

        const { questions } = this.state;

        let i=0;
        questions.forEach(question => {
            questionChildren.push(<TextQuestion 
                key={`q_${i}`}
                questionIndex={i} 
                question={question} 
                addAnswer={this.addAnswer} 
                deleteAnswer={this.deleteAnswer}
                updateAnswer={this.updateAnswer}
                removeQuestion={this.removeQuestion} 
                updateQuestion={this.updateQuestion}
                markCorrectAnswer={this.markCorrectAnswer} />);
            i++
        })

        return (
            <div>
                <h2 className="builderHeader">Quiz Builder</h2>
                <div className="questionDiv" id="newQuestionContainer"></div>
                <form className="addQForm">
                {questionChildren}
                <button type="button" id="addQuestion" onClick={this.addTextQuestion}><i className="material-icons">add</i> Question</button>
                </form> 
                <AjaxPOST saveQuiz={this.saveQuiz} changeTask={this.props.changeTask} />        
            </div>
        )
   }  
}

export default QuizBuilder;