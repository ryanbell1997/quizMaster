import React from 'react';
import '../css/addQuestion.css';
import AnswerText from './answerText.js';

class AddTextQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noAnswers: 0
        }
        this.addAnswer = this.addAnswer.bind(this);
        this.deleteAnswer = this.deleteAnswer.bind(this);
    }

    addAnswer(){
        this.setState({
            noAnswers: this.state.noAnswers + 1
        })
    }
    
    render(){

        const answerButton = this.state.noAnswers < 4 ? <button type="button" onClick={this.addAnswer}><i className="material-icons">add</i>Answer</button> : <button type="button">Max of 4 answers</button>

        let answers = [];

            for(let i = 0; i < this.state.noAnswers; i++){
                answers.push(<div key={i}>
                    <AnswerText  qNo={i + 1} />
                    <button type="button" id={`delet_${i}`} onClick={}>X</button>
                    {console.log(i)}
                    </div>);
            }

        return (
        <div className="qContainer">

                <div className="questionContainer containers">
                        <h3 className="qNo">Question {this.props.qNo}</h3>
                        <div className="input">
                            <label htmlFor="question">Question</label>
                            <input name="question" type="text" id="question"></input>
                        </div>
                </div>
              
                <div className="answerContainer containers">
                    {answers}
                    {answerButton}
                    
                </div>
        </div>
        );
    }
}

export default AddTextQuestion;