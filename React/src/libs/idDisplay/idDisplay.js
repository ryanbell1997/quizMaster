import React from 'react';

class IdDisplay extends React.Component {
    constructor(props){
        super(props);
        this.handleChangeTask = this.handleChangeTask.bind(this);
    }

    handleChangeTask(e){
        const { changeTask } = this.props;
        changeTask(e.target.id);
    }

    render(){
        return (
            <div>
                <p>Quiz created!</p>
                <p>Unique Quiz id: {this.props.quizID}</p>
                <br></br>
                <button onClick={this.handleChangeTask}>Return</button>
                    
            </div>
        )
    }
}

export default IdDisplay;