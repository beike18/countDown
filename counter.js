import React, {Component} from 'react';
import Number from "./Number";

let countId,button;

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 120,
            situation: true
        }
    }

    autoCount(){
        countId = setInterval(() =>{
            this.setState({
                number:this.state.number - 1,
                situation:true
            });
            if(this.state.number <= 0){
                this.handleStop();
            }
        },1000)
    }



    componentDidMount() {
        this.autoCount();
    }

    handleContinue(){
        this.autoCount();
    }

    handleStop = ()=>{
        clearInterval(countId)
        this.setState({
            number:this.state.number,
            situation:false
        })
    }




    render() {
        if(this.state.situation){
            button = <button className="stop_timer" onClick={this.handleStop}>Stop Timer</button>
        }else if(this.state.number === 0){
            button = <button>restart</button>
        }else{
            button = <button className="stop_timer" onClick={this.handleContinue}>continue</button>
        }
    return (
      <div className={'counter_text'}>
        <Number number={this.state.number}/>
          {button}
      </div>
    );
  }
}

export default Counter;
