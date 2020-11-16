import React from 'react';

class AjaxPOST extends React.Component {
    constructor(props) {
        super(props);
        this.handlePrintQuestion = this.handlePrintQuestion.bind(this);
        this.handleSaveQuiz = this.handleSaveQuiz.bind(this);
    }


    handlePrintQuestion(){
        const { printQuestion } = this.props;
        printQuestion();
    }

    handleSaveQuiz(){
        const { saveQuiz } = this.props;
        saveQuiz();
    }

    render() {
        return (
            <h1 onClick={this.handleSaveQuiz}>AJAX Post</h1>
        )
    }
}

export default AjaxPOST