import React from 'react';

class AjaxPOST extends React.Component {
    constructor(props) {
        super(props);
        this.handlePrintQuestion = this.handlePrintQuestion.bind(this);
        this.handleSaveQuiz = this.handleSaveQuiz.bind(this);
        this.handleChangeTask = this.handleChangeTask.bind(this);    }


    handlePrintQuestion(){
        const { printQuestion } = this.props;
        printQuestion();
    }

    handleSaveQuiz(){
        const { saveQuiz } = this.props;
        saveQuiz();
    }

    handleChangeTask(e){
        const { changeTask } = this.props;
        this.handleSaveQuiz();
        changeTask(e.target.id)
    }

    render() {
        return (
            <button onClick={this.handleChangeTask} id="completeQuiz">Complete Quiz</button>
        )
    }
}

export default AjaxPOST