import React from 'react';
import QuizBuilder from '../quizBuilder/quizBuilder.js';
import PlayQuiz from '../playQuiz/playQuiz.js';
import TaskButtons from '../taskButtons/taskButtons.js';
import IdDisplay from '../idDisplay/idDisplay.js';

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTask: "tbc",
            quizID: 0
        }
        this.changeCurrentTask = this.changeCurrentTask.bind(this)
        this.setQuizId = this.setQuizId.bind(this);

    }

    changeCurrentTask(input){
        this.setState({ currentTask: input })
    }

    setQuizId(input){
        this.setState({ quizID: input })
    }

    renderSwitch(){
        switch(this.state.currentTask){
            case "buttons":
                return <TaskButtons changeTask={this.changeCurrentTask} />
            case "buildQuiz":
                return <QuizBuilder changeTask={this.changeCurrentTask} setQuizID={this.setQuizId} />
            case "playQuiz":
                return <PlayQuiz /> 
            case "completeQuiz":
                return <IdDisplay quizID={this.state.quizID} changeTask={this.changeCurrentTask} />
            default:
                return <TaskButtons changeTask={this.changeCurrentTask} />
        }
    }

    render(){
        return (
            <div>
                {this.renderSwitch()}
            </div>
        )
    }

}

export default MainContainer;