import React, { Component } from 'react'


class Clock extends Component {

constructor() {
    super()

    this.state = {
         date :new Date()
    };
    
}

currentTime = () => {
    this.setState({
        date : new Date()
    })
    console.log("current time")
}

componentDidMount= () => {
    console.log("Component Did mount")
    setInterval (()=> this.currentTime(),1000)
    // if(console.log(this.state.date.getHours()) <= 11){
    //    set = {
    //         format : 'am'
    //     }
    // else{
    //     set = {
    //         format : 'pm'
    //     }
    // }
    // }
}

render() {
        console.log("render")
        return (
            
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <h1>{this.state.date.toTimeString()}</h1>
               
            </div>
        )
    }
}

export default Clock
