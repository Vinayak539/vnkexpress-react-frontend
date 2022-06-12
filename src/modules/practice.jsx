// import React from 'react-dom';
import * as React from "react";


class Practice extends React.Component{
    constructor(props){
        super(props);

        this.state = {}
    }
    render(){
        return (
            <div class="">
                This is a class component {this.props.name}
            </div>
        )
    }
}

export default Practice;
