import React from 'react';

class IdDisplay extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <p>Quiz created!</p>
                <p>Unique Quiz id: {this.props.quizID}</p>    
            </div>
        )
    }
}

export default IdDisplay;