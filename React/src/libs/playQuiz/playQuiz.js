import React from 'react';

class PlayQuiz extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <h3>Enter Quiz Id</h3>
                <input type="text" max="6" />
                <button>Get Quiz</button>
            </div>

        )
    }
}

export default PlayQuiz;    