import React from 'react';
import './Time.css';



 
function Time(ms){
    
    // var ms = 1800000;

    let seconds = Math.floor(ms/1000);
    let sec= seconds % 60;
        if (sec<10) {sec="0"+sec};
    let min= Math.floor((seconds % 3600)/60);
        if (min<10) {min="0"+min};
    let h= Math.floor(seconds / 3600);
        if (h<10) {h="0"+h};
return (h +':'+ min +':'+  sec) 

}



class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            ms:0,
            isInPause: false
        }
    //     setInterval(
    //         () => {
                
    //             this.setState({ms: this.state.ms +1000})
    //         },1000

    //     )
    // }

    this.startPauseClick = this.startPauseClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }
    startPauseClick() {
        this.pausedSecond = this.state.ms
        this.setState({ms: this.pausedSecond});
        if (this.state.isInPause === false) {
            this.timerID = setInterval(() => {
                this.setState({
                    ms: this.state.ms + 1000,
                    isInPause: true
                });
            }, 1000)
        }
        else {
            clearInterval(this.timerID)
            this.setState({
                isInPause: false
            });
        }
    }
    resetClick() {
        clearInterval(this.timerID)
        this.setState({
            ms: 0,
            isInPause: false
        });
    }
render(){
    return(
        <div>
            <h1>
                {Time(this.state.ms)}
            </h1>
            <div className="buttons">
        <button className="start" type='button' onClick={this.startPauseClick}>{this.state.isInPause ? 'Pause' : 'Start'}></button>
        <button className="reset" type='reset' onClick={this.resetClick}>reset</button>
      </div>
        </div>
        
    )
    
}
}



export default Timer;
