import React from 'react';
import 'material-icons';
import AddTextQuestion from './addTextQuestion.js';

class QuizBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            noQuestions: 0
        };
        this.addTextQuestion = this.addTextQuestion.bind(this);
    }

    addTextQuestion() {
        this.setState({
            noQuestions: this.state.noQuestions + 1
        });
    }

    render(){
        let children = [];

        for(let i =  0; i < this.state.noQuestions; i++){
            children.push(<AddTextQuestion key={i} qNo={i + 1}/>)
        }

    return (
        <div>
            <h2 className="builderHeader">Quiz Builder</h2>
            <div className="questionDiv" id="newQuestionContainer"></div>
            {children}
            <button type="button" id="addQuestion" onClick={this.addTextQuestion}><i className="material-icons">add</i> Question</button>
            
        </div>
    )
   }  
}

export default QuizBuilder;