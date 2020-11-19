import React from 'react';
import './taskButtons.css';
import 'material-icons';

class TaskButtons extends React.Component{
    constructor(props){
        super(props);
        this.handleTaskChange = this.handleTaskChange.bind(this);
    }

    handleTaskChange(e){
        const { changeTask } = this.props;
        changeTask(e.target.id);
    }

    render(){
        return (
            <div className="taskContainer">
                <div className="taskWrapper">
                    <div className="introContainer">
                        <h4>Welcome to QuizMaster</h4>
                        <p>Get started by building your own quiz, or play your friends quiz!</p>
                    </div>
                    <div className="buttonContainer">
                        <button className="taskButton buildButton" onClick={this.handleTaskChange} id="buildQuiz"><i className="material-icons">create</i> Create Quiz</button>
                        <button className="taskButton playButton" onClick={this.handleTaskChange} id="playQuiz"><i className="material-icons">play_arrow</i> Play Quiz</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskButtons;